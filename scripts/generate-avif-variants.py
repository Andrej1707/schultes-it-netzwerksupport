"""Generate AVIF alternatives from verified original PNGs; retain all WebPs.

Requires Pillow 12.1+ with AVIF support. Run from any directory:
  python scripts/generate-avif-variants.py
  python scripts/generate-avif-variants.py --check

The source-root may be overridden when the original PNG archive is elsewhere.
--check verifies committed AVIFs without requiring the local source archive.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import json
from pathlib import Path
import re

import PIL
from PIL import Image, features


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "docs/design/avif-image-variants.json"
WIDTHS = [480, 640, 720, 800, 960, 1280, 1920]
ENCODING = {"quality": 65, "speed": 4, "subsampling": "4:2:0", "max_threads": 2}


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def current_names():
    catalog = (ROOT / "src/content/guides/catalog.ts").read_text(encoding="utf-8")
    entries = json.loads(re.search(r"=\s*(\[.*\])", catalog, re.S).group(1))
    names = {entry["image"] for entry in entries} | {"about-workshop"}
    photos = (ROOT / "src/site/photos.ts").read_text(encoding="utf-8")
    return names | set(re.findall(r"name: '([^']+)'", photos))


def output_path(name, width):
    if not re.fullmatch(r"[a-z0-9-]+", name):
        raise ValueError(f"Invalid image name: {name}")
    return ROOT / "public/images" / f"{name}-{width}.avif"


def inspect_output(path, width, height):
    with Image.open(path) as image:
        image.load()
        if image.format != "AVIF" or image.size != (width, height):
            raise ValueError(f"Incorrect image format or dimensions: {path}")
    return {
        "path": path.relative_to(ROOT).as_posix(),
        "width": width,
        "height": height,
        "bytes": path.stat().st_size,
        "sha256": sha256(path),
        "webpBytes": path.with_suffix(".webp").stat().st_size if path.with_suffix(".webp").exists() else None,
    }


def verify_entry(entry):
    variants = {variant["width"]: variant for variant in entry.get("variants", [])}
    if sorted(variants) != WIDTHS:
        raise ValueError(f"Incomplete AVIF inventory: {entry['name']}")
    for width in WIDTHS:
        height = round(entry["source"]["height"] * width / entry["source"]["width"])
        actual = inspect_output(output_path(entry["name"], width), width, height)
        if actual != variants[width]:
            raise ValueError(f"AVIF differs from the recorded export: {actual['path']}")


def generate_entry(entry, source_root):
    source = source_root / entry["source"]["relativePath"]
    if sha256(source) != entry["source"]["sha256"]:
        raise ValueError(f"Original PNG hash changed: {source}")
    existing = {variant["width"]: variant for variant in entry.get("variants", [])}
    variants = []
    with Image.open(source) as original:
        expected = (entry["source"]["width"], entry["source"]["height"])
        if original.format != "PNG" or original.size != expected:
            raise ValueError(f"Unexpected original format/dimensions: {source}")
        image = original.convert("RGB")
        for width in WIDTHS:
            height = round(image.height * width / image.width)
            target = output_path(entry["name"], width)
            if target.exists():
                actual = inspect_output(target, width, height)
                if existing.get(width) != actual:
                    raise ValueError(f"Refusing to overwrite an unverified existing file: {target}")
            else:
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                with target.open("xb") as output:
                    resized.save(output, format="AVIF", **ENCODING)
                actual = inspect_output(target, width, height)
            variants.append(actual)
    if sha256(source) != entry["source"]["sha256"]:
        raise ValueError(f"Original PNG changed during export: {source}")
    return {**entry, "variants": variants}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    parser.add_argument("--source-root", type=Path, default=Path.home() / ".codex/generated_images")
    args = parser.parse_args()
    if not features.check("avif"):
        raise RuntimeError("This Pillow installation has no AVIF support.")
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    entries = manifest["images"]
    names = [entry["name"] for entry in entries]
    if len(set(names)) != len(names) or set(names) != current_names():
        raise ValueError("AVIF source mapping must match all current guide and service image names.")
    if manifest["widths"] != WIDTHS or manifest["encoding"] != ENCODING:
        raise ValueError("Encoder settings differ from the recorded configuration.")
    if args.check:
        for entry in entries:
            verify_entry(entry)
        print(json.dumps({"verified_images": len(entries), "verified_variants": len(entries) * len(WIDTHS)}))
        return

    # Fail before writing any new image if even one original is missing or altered.
    for entry in entries:
        source = args.source_root / entry["source"]["relativePath"]
        if not source.is_file() or sha256(source) != entry["source"]["sha256"]:
            raise ValueError(f"Missing or altered original PNG: {source}")
    webp_hashes = {path: sha256(path) for path in (ROOT / "public/images").glob("*.webp")}
    completed = []
    # Four simultaneous encodes, each limited to two codec threads.
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = [pool.submit(generate_entry, entry, args.source_root) for entry in entries]
        for future in as_completed(futures):
            completed.append(future.result())
            if len(completed) % 5 == 0 or len(completed) == len(entries):
                print(json.dumps({"completed_images": len(completed), "total_images": len(entries)}), flush=True)
    for path, expected_hash in webp_hashes.items():
        if sha256(path) != expected_hash:
            raise ValueError(f"Existing WebP changed during export: {path}")
    manifest["images"] = sorted(completed, key=lambda entry: entry["name"])
    manifest["pillowVersion"] = PIL.__version__
    manifest["verification"] = {
        "decodedVariants": len(entries) * len(WIDTHS),
        "unchangedWebpFiles": len(webp_hashes),
        "unchangedOriginalPngFiles": len(entries),
        "totalAvifBytes": sum(variant["bytes"] for entry in completed for variant in entry["variants"]),
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest["verification"]), flush=True)


if __name__ == "__main__":
    main()
