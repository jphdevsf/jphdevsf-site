import type { Config, Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") return
  const response = await context.next()
  const newResponse = new Response(response.body, response)
  newResponse.headers.set("cache-control", "public, s-maxage=3600")
  newResponse.headers.set("x-edge-cache", "hit")
  newResponse.headers.set("x-cached-at", new Date().toISOString())
  return newResponse
}

export const config = {
  path: "/*",
  onError: "bypass",
  cache: "manual"
}
