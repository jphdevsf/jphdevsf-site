import { StoryblokStory } from "@storyblok/react/rsc"
import { notFound } from "next/navigation"
import getStoryBlokData from "@/lib/getStoryBlokData"

// Forcing dynamic rendering here to support visual editor draft mode with a single production environment. Hurts performance on static render side, but we still have netlify edge cache.
// Consider removing if we move to dedicated preview environment.
export const dynamic = "force-dynamic"

const Page = async ({ params }) => {
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

export default Page
