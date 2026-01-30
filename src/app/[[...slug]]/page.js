import { StoryblokStory } from "@storyblok/react/rsc"
import { draftMode, headers } from "next/headers"
import { notFound } from "next/navigation"
import getStoryBlokData from "@/lib/getStoryBlokData"

export const dynamicParams = true
export const revalidate = 60

const Page = async ({ params }) => {
  const { isEnabled } = await draftMode()
  const headersList = await headers()
  const referer = headersList.get("referer") || ""
  const isStoryblokPreview = referer.includes("storyblok.com")

  const { slug } = await params
  const fullSlug = slug ? slug.join("/") : "home"

  let storyblokData
  try {
    storyblokData = await getStoryBlokData(`cdn/stories/${fullSlug}`, {
      preview: isEnabled || isStoryblokPreview
    })
  } catch (err) {
    const is404 =
      err?.response?.status === 404 || err?.status === 404 || err?.message?.includes("not be found")

    if (is404) {
      notFound()
    }

    throw err
  }

  return <StoryblokStory story={storyblokData.story} />
}

export default Page
