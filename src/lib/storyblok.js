import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"
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

const storyblokComponents = {
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

export const getStoryblokApi = (preview = false) => {
  const accessToken = preview
    ? process.env.STORYBLOK_DELIVERY_API_TOKEN_PREVIEW
    : process.env.STORYBLOK_DELIVERY_API_TOKEN

  return storyblokInit({
    accessToken,
    use: [apiPlugin],
    apiOptions: {
      region: process.env.STORYBLOK_REGION || "eu",
      endpoint: `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
    },
    components: storyblokComponents,
    bridgeOptions: {
      resolveRelations: ["feature"],
      resolveLinks: "url"
    }
  })()
}
