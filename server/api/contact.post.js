export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  //Simule un OK et on log.
  console.log('[CONTACT]', {
    name: body?.name,
    email: body?.email,
    message: body?.message
  })

  if (!body?.email || !body?.message) {
    throw createError({ statusCode: 400, statusMessage: 'Champs manquants' })
  }

  return { ok: true, message: 'Message reçu, merci !' }
})
