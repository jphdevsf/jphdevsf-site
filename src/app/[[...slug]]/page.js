import { StoryblokStory } from "@storyblok/react/rsc"
import { notFound } from "next/navigation"
import getStoryBlokData from "@/lib/getStoryBlokData"

const fetchData = async fullSlug => {
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
  return storyblokData
}

const Page = async ({ params }) => {
  const { slug } = await params
  const fullSlug = slug ? slug.join("/") : "home"
  const storyblokData = await fetchData(fullSlug)
  return <StoryblokStory story={storyblokData.story} />
}

export default Page
