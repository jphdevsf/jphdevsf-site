export default async (req, context) => {
  if (req.method !== "GET") return context.next()
  if (req.url.includes("/api/")) return context.next()

  const url = new URL(req.url)
  const isStoryblokPreview =
    url.searchParams.has("_storyblok") ||
    url.searchParams.has("_storyblok_c") ||
    url.searchParams.has("_storyblok_tk[token]")

  const cookie = req.headers.get("cookie") || ""

  const isNextDraftMode =
    cookie.includes("__prerender_bypass") || cookie.includes("__next_preview_data")

  const response = await context.next()
  const newResponse = response.clone()

  const contentType = newResponse.headers.get("content-type") || ""

  // Never cache RSC, JSON, API, assets
  if (!contentType.includes("text/html")) {
    return newResponse
  }

  if (isNextDraftMode || isStoryblokPreview) {
    newResponse.headers.set("cache-control", "no-store")
    newResponse.headers.set("x-edge-preview-bypass", "true")
    return newResponse
  }

  newResponse.headers.set("cache-control", "public, s-maxage=3600")
  newResponse.headers.set("x-edge-processed-at", new Date().toISOString())
  return newResponse
}

export const config = {
  path: "/*",
  onError: "bypass"
}
