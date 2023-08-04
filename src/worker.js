import books from './db.json'

export default {
  async fetch(request, env, ctx) {
    const jsonData = JSON.stringify(books)

    return new Response(jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
