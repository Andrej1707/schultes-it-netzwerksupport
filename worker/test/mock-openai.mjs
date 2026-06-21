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
