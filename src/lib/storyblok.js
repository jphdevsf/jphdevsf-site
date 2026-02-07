import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"
import Storyblok from "storyblok-js-client"
import Card from "@/components/blocks/Card"
import Feature from "@/components/blocks/Feature"
import FileDownload from "@/components/blocks/FileDownload"
import GithubWidget from "@/components/blocks/GithubWidget"
import Grid from "@/components/blocks/Grid"
import Hero from "@/components/blocks/Hero"
import MarkdownSection from "@/components/blocks/MarkdownSection"
import TextBanner from "@/components/blocks/TextBanner"
import TextGroup from "@/components/elements/TextGroup"
import TextLink from "@/components/elements/TextLink"
import MenuLink from "@/components/templates/header/MenuLink"
import Page from "@/components/templates/Page"

const components = {
  // [Storyblok block name] : [Next.js component]
  page: Page,
  feature: Feature,
  grid: Grid,
  Card: Card,
  textbanner: TextBanner,
  hero: Hero,
  textgroup: TextGroup,
  link: TextLink,
  menu_link: MenuLink,
  github_stats: GithubWidget,
  file_download: FileDownload,
  markdown_section: MarkdownSection
}

const storyblokSpaceCacheTag = "storyblok-space"

const sharedApiOptions = {
  region: process.env.STORYBLOK_REGION || "eu",
  endpoint: process.env.STORYBLOK_API_BASE_URL
    ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
    : undefined,
  rateLimit: 100000,
  cache: { type: "none" }
}

const customFetch = async urlOrRequest => {
  const url = new URL(
    typeof urlOrRequest === "string" || urlOrRequest instanceof URL
      ? urlOrRequest
      : urlOrRequest.url
  )

  if (url.pathname === "/v2/cdn/spaces/me") {
    url.searchParams.delete("cv")

    return fetch(url.toString(), {
      next: {
        tags: [storyblokSpaceCacheTag],
        revalidate: false
      }
    })
  }

  url.searchParams.set("cv", (await getCv()).toString())

  return fetch(url.toString(), {
    next: { revalidate: false }
  })
}

const storyblokClient = new Storyblok({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  ...sharedApiOptions,
  fetch: customFetch
})

async function getCv() {
  return await storyblokClient
    .get("cdn/spaces/me", { version: "published" })
    .then(x => parseInt(x.data.space.version, 10))
}

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    ...sharedApiOptions,
    fetch: customFetch
  },
  components
})
