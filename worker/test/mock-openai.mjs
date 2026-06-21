import { createServer } from 'node:http'

const server = createServer(async (request, response) => {
  const chunks = []
  for await (const chunk of request) chunks.push(chunk)
  const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')

  response.setHeader('Content-Type', 'application/json')
  if (request.url === '/v1/moderations') {
    response.end(JSON.stringify({ results: [{ flagged: false }] }))
    return
  }

  if (request.url === '/v1/responses') {
    const validRequest =
      body.model === 'gpt-5.4-mini' &&
      body.store === false &&
      Array.isArray(body.tools) &&
      body.tools.length === 0 &&
      typeof body.instructions === 'string' &&
      body.instructions.includes('Schultes IT & Netzwerksupport')

    if (!validRequest) {
      response.statusCode = 400
      response.end(JSON.stringify({ error: 'invalid_test_request' }))
      return
    }

    const lastMessage = body.input?.at?.(-1)?.content ?? ''
    if (body.text?.format?.name === 'basic_support_plan') {
      const shouldEscalate = /nicht geholfen|immer noch nicht/i.test(lastMessage)
      response.end(
        JSON.stringify({
          output_text: JSON.stringify({
            category: 'wlan_unstable',
            decision: shouldEscalate ? 'escalate' : 'assist',
            intro: shouldEscalate
              ? 'Danke fürs Ausprobieren. Dann steckt wahrscheinlich mehr als ein kurzer WLAN-Aussetzer dahinter.'
              : 'Das klingt nach einer zeitweise instabilen WLAN-Verbindung. Lass uns zuerst zwei sichere Dinge eingrenzen.',
            step_ids: shouldEscalate ? [] : ['check_other_devices', 'toggle_wifi'],
            question: shouldEscalate ? '' : 'Sind nur ein Gerät oder mehrere Geräte betroffen?',
            closing: shouldEscalate
              ? 'Damit du nicht weiter im Kreis probierst, sollte Andrej sich die Verbindung persönlich ansehen.'
              : 'Schreib mir kurz, was dabei herauskommt, dann ordnen wir den nächsten Schritt ein.',
          }),
          usage: { total_tokens: 95 },
        }),
      )
      return
    }

    response.end(
      JSON.stringify({
        output_text: `Testantwort zu: ${lastMessage}`,
        usage: { total_tokens: 120 },
      }),
    )
    return
  }

  response.statusCode = 404
  response.end(JSON.stringify({ error: 'not_found' }))
})

server.listen(8790, '127.0.0.1', () => {
  console.log('Mock OpenAI listening on http://127.0.0.1:8790')
})
