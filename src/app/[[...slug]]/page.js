import { StoryblokStory } from "@storyblok/react/rsc"
import getStoryBlokData from "@/lib/getStoryBlokData"

export default async function Page({ params }) {
  const { slug } = await params

  const fullSlug = slug ? slug.join("/") : "home"

  const data = await getStoryBlokData(`cdn/stories/${fullSlug}`)

  return <StoryblokStory story={data.story} />
}
