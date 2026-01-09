import type { Config, Context } from "@netlify/edge-functions"

export default async (req: Request, context: Context) => {
  // This edge function will cache the main page response
  // It intercepts requests to the root path and adds caching headers

  // Only cache GET requests
  if (req.method !== "GET") {
    return
  }

  const url = new URL(req.url)

  // Only cache the home page and specific paths
  const cacheablePaths = ["/", "/home", "/about", "/contact"]

  if (cacheablePaths.includes(url.pathname)) {
    // Clone the request to pass through
    const request = new Request(req)

    // Add cache headers to the response
    const response = await context.next()
    const newResponse = new Response(response.body, response)

    // Add cache headers for public caching
    newResponse.headers.set("cache-control", "public, s-maxage=300, stale-while-revalidate=60")
    newResponse.headers.set("x-edge-cache", "hit")
    newResponse.headers.set("x-cached-at", new Date().toISOString())

    return newResponse
  }

  // For non-cacheable paths, let the request continue normally
  return
}

export const config: Config = {
  path: "/*",
  onError: "bypass"
}
