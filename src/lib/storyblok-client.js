"use client"

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"

export const initStoryblokClient = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN_PREVIEW,
    use: [apiPlugin],
    enableFallbackComponent: true
  })
}
