import type { Config, Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  // Get the current timestamp
  const timestamp = new Date().toISOString()

  // Create a response with caching headers
  const response = new Response(
    JSON.stringify({
      message: "This response is cached at the edge!",
      timestamp: timestamp,
      cacheInfo: "This response will be cached for 1 hour (3600 seconds)",
      path: new URL(req.url).pathname,
      userAgent: req.headers.get("user-agent") || "Unknown"
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=3600",
        "x-edge-function": "cache-demo"
      }
    }
  )

  return response
}

export const config: Config = {
  cache: "manual",
  path: "/api/cache-demo",
  onError: "bypass"
}
