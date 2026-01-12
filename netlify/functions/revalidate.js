export default async req => {
  try {
    const body = await req.json()

    const slug = body.story?.full_slug
    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 })
    }

    // Normalize homepage
    const path = slug === "home" ? "/" : `/${slug}`

    // Trigger Netlify ISR revalidation if ravalidate function exists (production only)
    if (typeof Netlify?.revalidate === "function") {
      await Netlify.revalidate(path)
    }

    return new Response(JSON.stringify({ revalidated: true, path }))
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
