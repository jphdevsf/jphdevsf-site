export default async req => {
  try {
    const body = await req.json()

    // Extract slug from Storyblok webhook
    const slug = body.story?.full_slug || body.full_slug

    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 })
    }

    // Normalize homepage
    const path = slug === "home" ? "/" : `/${slug}`

    // Check for secret to confirm this is a valid request
    const authHeader = req.headers.get("authorization")
    if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATE_SECRET_TOKEN}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
    }

    // Call Next.js revalidation API route
    const revalidateUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`
    const response = await fetch(revalidateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REVALIDATE_SECRET_TOKEN}`
      },
      body: JSON.stringify({ path })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to revalidate")
    }

    const data = await response.json()
    return new Response(JSON.stringify({ revalidated: data.revalidated, path }))
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
