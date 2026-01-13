import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"
import Card from "@/components/Card"
import Feature from "@/components/Feature"
import FileDownload from "@/components/FileDownload"
import GithubStats from "@/components/GithubStats"
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import MenuLink from "@/components/header/MenuLink"
import MarkdownSection from "@/components/MarkdownSection"
import Page from "@/components/Page"
import TextBanner from "@/components/TextBanner"
import TextGroup from "@/components/TextGroup"
import TextLink from "@/components/TextLink"

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: process.env.STORYBLOK_REGION || "eu",
    endpoint: process.env.STORYBLOK_API_BASE_URL
      ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
      : undefined
  },
  components: {
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
    github_stats: GithubStats,
    file_download: FileDownload,
    markdown_section: MarkdownSection
  }
})
