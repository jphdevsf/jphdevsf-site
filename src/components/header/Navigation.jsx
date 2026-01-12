import { StoryblokComponent } from "@storyblok/react"
import getStoryBlokData from "@/lib/getStoryBlokData"

const Navigation = async () => {
  const {
    story: {
      content: { header_menu }
    }
  } = await getStoryBlokData("cdn/stories/config", { resolve_links: "url" })
  return (
    <nav className="flex items-center bg-figma_purple_light">
      <ul className="flex">
        {header_menu?.map(nestedBlok => (
          <StoryblokComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
