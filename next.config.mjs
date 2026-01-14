const nextConfig = {
  env: {
    STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
    STORYBLOK_API_BASE_URL: process.env.STORYBLOK_API_BASE_URL,
    STORYBLOK_REGION: process.env.STORYBLOK_REGION
  },
  images: {
    remotePatterns: [
      new URL("https://a.storyblok.com/**"),
      { protocol: "https", hostname: "avatars.githubusercontent.com" }
    ]
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      }
    ]
  }
}

export default nextConfig
