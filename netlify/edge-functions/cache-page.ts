import type { Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") return

  const url = new URL(req.url)
  const isStoryblokPreview =
    url.searchParams.has("_storyblok") ||
    url.searchParams.has("_storyblok_c") ||
    url.searchParams.has("_storyblok_tk[token]")

  const response = await context.next()
  const newResponse = new Response(response.body, response)

  if (isStoryblokPreview) {
    newResponse.headers.set("cache-control", "no-store")
    newResponse.headers.set("x-edge-preview-bypass", "true")
    return newResponse
  }

  newResponse.headers.set("cache-control", "public, s-maxage=300")
  newResponse.headers.set("x-edge-processed-at", new Date().toISOString())
  return newResponse
}

export const config = {
  path: "/*",
  cache: "manual",
  onError: "bypass"
}
