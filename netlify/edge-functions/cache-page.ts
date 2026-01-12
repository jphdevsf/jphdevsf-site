import type { Config, Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") return
  const response = await context.next()
  return new Response(response.body, {
    headers: {
      'cache-control': 'public, s-maxage=3600',
      "x-edge-cache": "hit",
      "x-cached-at": new Date().toISOString(),
    }
  })
}

export const config = {
  path: "/*",
  onError: "bypass",
  cache: "manual"
}
