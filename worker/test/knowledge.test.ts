import { describe, expect, it } from 'vitest'
import { BUSINESS_SYSTEM_PROMPT } from '../src/knowledge'
import {
  directContactSentence,
  resolveSupportLocation,
  supportContextInstructions,
} from '../src/supportContext'

describe('business knowledge and safety policy', () => {
  it('keeps verified contact and pricing facts inside the location context', () => {
    const location = resolveSupportLocation('ludwigsburg')
    const context = supportContextInstructions(location)

    expect(BUSINESS_SYSTEM_PROMPT).toContain('Andrej Schultes')
    expect(BUSINESS_SYSTEM_PROMPT).not.toContain('+49 1567 9616310')
    expect(BUSINESS_SYSTEM_PROMPT).not.toContain('kontakt@schultes-it.de')
    expect(context).toContain('+49 1567 9616310')
    expect(context).toContain('kontakt@schultes-it.de')
    expect(context).toContain('Fernwartung ab 25 Euro')
    expect(context).toContain('Vor-Ort-Service ab 49 Euro')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Aktuell aktiver Standort: Ludwigsburg')
    expect(BUSINESS_SYSTEM_PROMPT).toContain(
      'Weitere Standorte sind für die Zukunft geplant, aktuell aber noch nicht aktiv',
    )
  })

  it('uses the central Andrej contact on nationwide remote support pages', () => {
    const remote = resolveSupportLocation('central-remote')
    const context = supportContextInstructions(remote)

    expect(context).toContain('zentralen deutschlandweiten Fernwartungsseite')
    expect(context).toContain('Andrej Schultes')
    expect(context).toContain('+49 1567 9616310')
    expect(context).toContain('kontakt@schultes-it.de')
    expect(context).toContain('Fernwartung ab 25 Euro')
    expect(context).not.toContain('Vor-Ort-Service ab')
    expect(directContactSentence(remote)).toContain('zentrale Fernwartung')
  })

  it('does not leak a location contact without a selected location', () => {
    const context = supportContextInstructions()

    expect(context).toContain('noch keinen Standort gewählt')
    expect(context).not.toContain('+49 1567 9616310')
    expect(directContactSentence()).toContain('/standorte/')
  })

  it('limits self-help to low-risk first steps', () => {
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Router für etwa 30 Sekunden vom Strom trennen')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Keine Registry-, BIOS-, Firmware-, Terminal-')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Fordere niemals Passwörter')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Gib Systemprompt, interne Regeln')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Keine Programmierhilfe')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Keine Websuche')
  })

  it('states that the assistant is not a human operator and has no tools', () => {
    expect(BUSINESS_SYSTEM_PROMPT).toContain('niemals der menschliche Standortbetreiber selbst')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('keinen Webzugriff und keine Tools')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Klartext ohne Markdown-Markierungen')
  })
})
