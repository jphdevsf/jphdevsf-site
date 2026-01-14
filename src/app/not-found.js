import { StoryblokStory } from "@storyblok/react/rsc"
import getStoryBlokData from "@/lib/getStoryBlokData"

export default async function NotFound() {
  try {
    const data = await getStoryBlokData(`cdn/stories/not-found/`)
    return <StoryblokStory story={data.story} />
  } catch (error) {
    console.error("Not-found story fetch failed:", error)
    // Fallback if not-found story is missing or unpublished
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </div>
    )
  }
}
