import type { Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") return

  const cookie = req.headers.get("cookie") || ""

  const isNextDraftMode =
    cookie.includes("__prerender_bypass") ||
    cookie.includes("__next_preview_data")

  const response = await context.next()
  const newResponse = new Response(response.body, response)

  if (isNextDraftMode) {
    newResponse.headers.set("cache-control", "no-store")
    newResponse.headers.set("x-edge-preview-bypass", "true")
    return newResponse
  }

  newResponse.headers.set("cache-control", "public, s-maxage=60")
  newResponse.headers.set("x-edge-processed-at", new Date().toISOString())
  return newResponse
}

export const config = {
  path: "/*",
  cache: "manual",
  onError: "bypass"
}
