import { StoryblokStory } from "@storyblok/react/rsc"
import { notFound } from "next/navigation"
import getStoryBlokData from "@/lib/getStoryBlokData"

export default async function Page({ params }) {
  const { slug } = await params
  const fullSlug = slug ? slug.join("/") : "home"
  let storyblokData
  try {
    storyblokData = await getStoryBlokData(`cdn/stories/${fullSlug}`)
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
