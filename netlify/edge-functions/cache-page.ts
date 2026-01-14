import type { Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") return
  const response = await context.next()
  const newResponse = new Response(response.body, response)
  newResponse.headers.set("cache-control", "public, s-maxage=3600") // 1 hour
  newResponse.headers.set("x-edge-processed-at", new Date().toISOString())
  return newResponse
}

export const config = {
  path: "/*",
  cache: "manual",
  onError: "bypass"
}
