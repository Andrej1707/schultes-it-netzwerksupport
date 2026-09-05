import { ExternalLink } from 'lucide-react'
import { contactForLocation } from '../site/contacts'
import { locationById } from '../site/locations'
const legalLocation = locationById.ludwigsburg
const email = contactForLocation(legalLocation).email
const address = `${legalLocation.streetAddress}, ${legalLocation.postalCode} ${legalLocation.city}`
export function ImprintContent() {
  return (
    <div className="legal-content">
      <section>
        <span>01 / ANBIETER</span>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          <strong>Schultes IT & Netzwerksupport</strong>
          <br />
          Inhaber: Andrej Schultes
          <br />
          Egerländer Str. 24
          <br />
          71638 Ludwigsburg
          <br />
          Deutschland
        </address>
      </section>

      <section>
        <span>02 / KONTAKT</span>
        <h2>Direkter Kontakt</h2>
        <p>
          <span data-nosnippet>
            E-Mail: <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      </section>

      <section>
        <span>03 / INHALT</span>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Andrej Schultes
          <br />
          {address}
        </p>
      </section>

      <section>
        <span>04 / STREITBEILEGUNG</span>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Ich bin nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <section>
        <span>05 / HAFTUNG</span>
        <h2>Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter. Auf deren
          Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>
      </section>
    </div>
  )
}

export function PrivacyContent() {
  return (
    <div className="legal-content privacy-content">
      <section>
        <span>01 / VERANTWORTLICH</span>
        <h2>Verantwortliche Stelle</h2>
        <address>
          <strong>Andrej Schultes</strong>
          <br />
          Schultes IT & Netzwerksupport
          <br />
          Egerländer Str. 24
          <br />
          71638 Ludwigsburg
          <br />
          Deutschland
        </address>
        <p>
          <span data-nosnippet>
            E-Mail: <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      </section>

      <section>
        <span>02 / HOSTING</span>
        <h2>Bereitstellung über GitHub Pages</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist
          GitHub, Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107,
          USA. Beim Aufruf verarbeitet GitHub technisch erforderliche
          Verbindungsdaten. Nach Angaben von GitHub wird insbesondere die
          IP-Adresse zu Sicherheitszwecken protokolliert und gespeichert.
        </p>
        <p>
          Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung
          dieser Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das
          berechtigte Interesse liegt im sicheren, performanten und
          manipulationsgeschützten Betrieb des Webangebots. Eine Übermittlung in
          die USA kann dabei nicht ausgeschlossen werden.
        </p>
        <p>
          Mehr Informationen:{' '}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von GitHub <ExternalLink aria-hidden="true" />
          </a>
        </p>
      </section>

      <section>
        <span>03 / KONTAKTAUFNAHME</span>
        <h2>Telefon und E-Mail</h2>
        <p>
          Wenn du telefonisch oder per E-Mail Kontakt aufnimmst, werden die von
          dir übermittelten Angaben verarbeitet, um deine Anfrage zu beantworten
          und mögliche Anschlussfragen zu klären.
        </p>
        <p>
          Soweit deine Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen
          gerichtet ist, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs.
          1 lit. b DSGVO. In allen anderen Fällen beruht sie auf Art. 6 Abs. 1
          lit. f DSGVO und dem berechtigten Interesse an einer effizienten
          Kommunikation. Die Daten werden gelöscht, sobald die Anfrage
          abschließend bearbeitet ist und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <span>04 / GOOGLE MAPS</span>
        <h2>Karte nur nach Einwilligung</h2>
        <p>
          Die interaktive Google-Karte wird beim ersten Seitenaufruf nicht
          geladen. Erst wenn du aktiv auf „Google Maps laden“ klickst, wird eine
          Verbindung zu Google hergestellt. Anbieter für Nutzerinnen und Nutzer
          im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Dabei können insbesondere IP-Adresse, Geräte- und
          Browserinformationen, Zeitpunkt, Referrer-URL sowie Interaktionen mit
          der Karte an Google übertragen werden. Bist du bei Google angemeldet,
          können die Daten deinem Konto zugeordnet werden. Eine Verarbeitung in
          den USA ist möglich.
        </p>
        <p>
          Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
          sowie § 25 Abs. 1 TDDDG. Du kannst die Karte jederzeit über „Karte
          deaktivieren“ wieder entfernen. Bereits erfolgte Übertragungen werden
          dadurch nicht rückgängig gemacht.
        </p>
        <p>
          Mehr Informationen:{' '}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von Google <ExternalLink aria-hidden="true" />
          </a>
        </p>
      </section>

      <section>
        <span>05 / LOKALE FUNKTIONEN</span>
        <h2>Zwischenablage und externe Links</h2>
        <p>
          Die Funktion „Telefonnummer kopieren“ nutzt ausschließlich die lokale
          Zwischenablage-Funktion deines Browsers. Inhalte deiner Zwischenablage
          werden dabei nicht an mich oder einen Analysedienst übermittelt.
          Externe Angebote wie Google Maps oder GitHub werden erst aufgerufen,
          wenn du den jeweiligen Link aktiv anklickst.
        </p>
      </section>

      <section>
        <span>06 / STANDORTSUCHE</span>
        <h2>Optionale Standortbestimmung im Browser</h2>
        <p>
          Auf der Standortübersicht kannst du freiwillig die Funktion „Meinen
          Standort prüfen“ verwenden. Erst nach deiner Freigabe stellt dein
          Browser die ungefähren Koordinaten für die Berechnung bereit. Die
          Entfernung zu aktiven Schultes-IT-Standorten wird ausschließlich lokal
          in deinem Browser berechnet.
        </p>
        <p>
          Die Koordinaten werden dabei nicht an Schultes IT, Cloudflare, GitHub
          oder einen anderen Dienst übertragen und nicht gespeichert. Auch bei
          bereits erteilter Browser-Berechtigung startet die Berechnung erst
          nach deinem Klick auf die Schaltfläche. Die Berechtigung kannst du
          jederzeit in den Einstellungen deines Browsers oder Geräts entziehen.
        </p>
      </section>

      <section>
        <span>07 / TRACKING</span>
        <h2>Cloudflare Web Analytics</h2>
        <p>
          Diese Website verwendet Cloudflare Web Analytics, einen Dienst der
          Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA. Damit
          werden zusammengefasste Angaben wie Seitenaufrufe, verweisende Seiten,
          ungefährer Standort, Gerätetyp und Browser ausgewertet. Die Auswertung
          hilft mir zu verstehen, welche Inhalte genutzt werden und wo die
          Website technisch verbessert werden kann.
        </p>
        <p>
          Cloudflare Web Analytics arbeitet ohne Cookies, Local Storage oder
          geräteübergreifende Nutzerprofile. Nach Angaben von Cloudflare werden
          keine einzelnen Besucher über mehrere Websites hinweg verfolgt und
          keine Fingerabdrücke aus IP-Adresse, Browserkennung oder anderen
          Merkmalen gebildet. Die Verarbeitung erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in einer
          datensparsamen Reichweitenmessung und der Verbesserung meines
          Webangebots.
        </p>
        <p>
          Eine Verarbeitung in den USA kann nicht ausgeschlossen werden. Weitere
          Informationen findest du in der{' '}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von Cloudflare{' '}
            <ExternalLink aria-hidden="true" />
          </a>
          . Es werden weiterhin keine Werbe-Cookies oder externen Schriftarten
          geladen.
        </p>
      </section>

      <section>
        <span>08 / BOT-SCHUTZ</span>
        <h2>Cloudflare Turnstile und Support-Backend</h2>
        <p>
          Der digitale Assistent wird erst freigeschaltet, nachdem du die
          Sicherheitsprüfung Cloudflare Turnstile aktiv durchlaufen hast.
          Turnstile hilft dabei, automatisierte Zugriffe und Missbrauch zu
          erkennen. Dabei können technische Verbindungsdaten wie IP-Adresse,
          Browser- und Geräteinformationen sowie Zeitpunkt und Ergebnis der
          Prüfung durch Cloudflare verarbeitet werden.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Das berechtigte Interesse liegt im Schutz des Assistenten und der
          dahinterliegenden kostenpflichtigen Schnittstellen vor Spam und
          automatisiertem Missbrauch. Nach erfolgreicher Prüfung wird eine
          zufällige, auf 24 Stunden begrenzte Sitzungskennung im Session Storage
          deines Browsers gespeichert. Serverseitig werden die IP-Adresse nur
          pseudonymisiert für Missbrauchsgrenzen und höchstens die letzten acht
          Chat-Nachrichten für den Gesprächskontext verarbeitet. Die technische
          Verarbeitung erfolgt über Cloudflare Workers.
        </p>
        <p>
          Weitere Informationen findest du in der{' '}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von Cloudflare{' '}
            <ExternalLink aria-hidden="true" />
          </a>
          .
        </p>
      </section>

      <section>
        <span>09 / KI-ASSISTENT</span>
        <h2>Textverarbeitung durch OpenAI</h2>
        <p>
          Wenn du den digitalen Assistenten freiwillig nutzt, werden deine
          eingegebenen Texte an die OpenAI-API übermittelt, um eine passende
          Antwort zu erzeugen und sicherheitskritische Inhalte zu prüfen.
          Anbieter ist für Nutzer im Europäischen Wirtschaftsraum OpenAI Ireland
          Limited. Die Website übermittelt keine Dateien, Bilder, Browser-Suche
          oder automatisch ausgelesene Inhalte. Bitte sende insbesondere keine
          Passwörter, PINs, Zahlungsdaten oder andere vertrauliche
          Informationen.
        </p>
        <p>
          Die Verarbeitung erfolgt bei vertragsbezogenen Anfragen auf Grundlage
          von Art. 6 Abs. 1 lit. b DSGVO, ansonsten auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO und dem Interesse an einer schnellen, freiwilligen
          Erstorientierung. API-Anfragen werden mit deaktivierter
          Antwortspeicherung (<code>store: false</code>) gesendet. Eine
          Verarbeitung außerhalb der EU kann dennoch nicht ausgeschlossen
          werden. Der Assistent trifft keine Entscheidungen mit rechtlicher oder
          ähnlich erheblicher Wirkung und ersetzt keine persönliche Diagnose.
        </p>
        <p>
          Weitere Informationen findest du in der{' '}
          <a
            href="https://openai.com/policies/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von OpenAI <ExternalLink aria-hidden="true" />
          </a>
          .
        </p>
      </section>

      <section>
        <span>10 / DEINE RECHTE</span>
        <h2>Betroffenenrechte</h2>
        <p>
          Du hast im Rahmen der gesetzlichen Voraussetzungen das Recht auf
          Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung
          kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Außerdem besteht ein Beschwerderecht bei einer
          Datenschutzaufsichtsbehörde. Für nichtöffentliche Stellen in
          Baden-Württemberg ist insbesondere der Landesbeauftragte für den
          Datenschutz und die Informationsfreiheit Baden-Württemberg zuständig.
        </p>
      </section>

      <section>
        <span>11 / STAND</span>
        <h2>Stand dieser Erklärung</h2>
        <p>5. September 2026</p>
      </section>
    </div>
  )
}
