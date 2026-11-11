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
    expect(BUSINESS_SYSTEM_PROMPT).not.toContain('+49 179 1707411')
    expect(BUSINESS_SYSTEM_PROMPT).not.toContain('kontakt@schultes-it.de')
    expect(context).toContain('+49 179 1707411')
    expect(context).toContain('kontakt@schultes-it.de')
    expect(context).toContain('Fernwartung ab 25 Euro')
    expect(context).toContain('Vor-Ort-Service ab 49 Euro')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('persönliche IT-Hilfe von Andrej Schultes in Ludwigsburg')
    expect(BUSINESS_SYSTEM_PROMPT).toContain(
      'Es gibt keine Standort- oder Partnerauswahl',
    )
  })

  it('uses the central Andrej contact on nationwide remote support pages', () => {
    const remote = resolveSupportLocation('central-remote')
    const context = supportContextInstructions(remote)

    expect(context).toContain('deutschlandweiten Fernwartungsseite')
    expect(context).toContain('Andrej Schultes')
    expect(context).toContain('+49 179 1707411')
    expect(context).toContain('kontakt@schultes-it.de')
    expect(context).toContain('Fernwartung ab 25 Euro')
    expect(context).not.toContain('Vor-Ort-Service ab')
    expect(directContactSentence(remote)).toContain('deutschlandweite Fernwartung')
  })

  it('offers Andrej directly without a selected location and supports old central clients', () => {
    const context = supportContextInstructions()
    expect(context).toContain('Andrej Schultes')
    expect(context).toContain('+49 179 1707411')
    expect(directContactSentence()).toContain('+49 179 1707411')
    expect(directContactSentence()).not.toContain('/standorte/')
    expect(resolveSupportLocation('central')?.id).toBe('ludwigsburg')
    expect(resolveSupportLocation('constructor')).toBeUndefined()
    expect(resolveSupportLocation('unknown')).toBeUndefined()
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
    expect(BUSINESS_SYSTEM_PROMPT).toContain('niemals der menschliche Inhaber selbst')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('keinen Webzugriff und keine Tools')
    expect(BUSINESS_SYSTEM_PROMPT).toContain('Klartext ohne Markdown-Markierungen')
  })
})
