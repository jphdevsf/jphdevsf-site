import { StoryblokServerComponent } from "@storyblok/react/rsc"
import getStoryBlokData from "@/lib/getStoryBlokData"

const Navigation = async () => {
  const {
    story: {
      content: { header_menu }
    }
  } = await getStoryBlokData("cdn/stories/config", { resolve_links: "url" })
  return (
    <nav className="flex flex-1 items-center justify-center md:justify-end w-full bg-indigo-950">
      <ul className="flex">
        {header_menu?.map(nestedBlok => (
          <StoryblokServerComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
