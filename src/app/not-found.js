import { StoryblokStory } from "@storyblok/react/rsc"
import getStoryBlokData from "@/lib/getStoryBlokData"

// Forcing dynamic rendering here to support visual editor draft mode with a single production environment. Hurts performance on static render side, but we still have netlify edge cache.
// Consider removing if we move to dedicated preview environment.
export const dynamic = "force-dynamic"

const NotFound = async () => {
  try {
    const data = await getStoryBlokData("cdn/stories/not-found")
    return <StoryblokStory story={data.story} />
  } catch (error) {
    console.error("Not-found story fetch failed:", error)
    // Fallback if not-found story is missing or unpublished
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </main>
    )
  }
}

export default NotFound
