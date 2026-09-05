// Each photographic placement has its own scene. Aliases share their canonical page.
// The release check rejects a photo reused by another canonical page.
export const servicePhotos: Record<string, { name: string; alt: string }> = {
  fernwartung: {
    name: 'remote-main',
    alt: 'Person mit Headset am Laptop im eigenen Arbeitszimmer',
  },
  'fernwartung-windows-hilfe': {
    name: 'remote-windows',
    alt: 'Laptop mit geöffneten Systemeinstellungen auf einem hellen Schreibtisch',
  },
  'fernwartung-drucker-hilfe': {
    name: 'remote-printer',
    alt: 'Kompakter Drucker neben einem Laptop für die gemeinsame Fernhilfe',
  },
  'fernwartung-email-outlook': {
    name: 'remote-email',
    alt: 'Tablet und Laptop mit einer übersichtlichen E-Mail-Ansicht',
  },
  'pc-system': {
    name: 'pc-service',
    alt: 'Laptop und kompakter Desktop-Computer auf einer hellen Arbeitsfläche',
  },
  installation: {
    name: 'installation-service',
    alt: 'Dockingstation mit sorgfältig verbundenen Computerkabeln',
  },
  'windows-einrichten': {
    name: 'windows-service',
    alt: 'Neu vorbereiteter Laptop an einem hellen Arbeitsplatz',
  },
  'pc-langsam': {
    name: 'slow-pc-service',
    alt: 'Geöffnete Laptop-Unterseite mit SSD und Präzisionswerkzeug',
  },
  email: {
    name: 'email-service',
    alt: 'Smartphone und Laptop für die Einrichtung von E-Mail-Konten',
  },
  drucker: {
    name: 'printer-service',
    alt: 'Multifunktionsdrucker mit geöffneter Scannerabdeckung',
  },
  programme: {
    name: 'software-service',
    alt: 'Laptop mit geöffneten Programmen und externem Laufwerk',
  },
  'office-installation': {
    name: 'office-service',
    alt: 'Arbeitsunterlagen, Taschenrechner und Laptop für Büroaufgaben',
  },
  'netzwerk-wlan': {
    name: 'network-service',
    alt: 'Router und Laptop in einem hellen Wohnbereich',
  },
  'fritzbox-hilfe': {
    name: 'fritzbox-service',
    alt: 'Detailansicht eines Routers mit Anschlüssen und Bedienelementen',
  },
  'mesh-wlan-einrichten': {
    name: 'mesh-service',
    alt: 'Mehrere Mesh-Zugangspunkte für die WLAN-Versorgung im Haus',
  },
  'router-entstoerung': {
    name: 'router-service',
    alt: 'Ein Netzwerkkabel wird direkt am Router angeschlossen',
  },
  'it-consulting': {
    name: 'consulting-service',
    alt: 'Gemeinsame Besprechung einer Technikplanung am Tisch',
  },
  'senioren-handy-hilfe': {
    name: 'seniors-service',
    alt: 'Ältere Hände am Smartphone mit ruhiger persönlicher Unterstützung',
  },
}
