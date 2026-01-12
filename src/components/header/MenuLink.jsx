import { storyblokEditable } from "@storyblok/react"
import Link from "next/link"

const MenuLink = ({ blok }) => {
  return (
    <Link
      href={blok.link.cached_url}
      className="text-link-sm-mob md:text-link-sm block font-light py-3 px-5 text-black hover:text-gray-700 underline"
      {...storyblokEditable(blok)}
    >
      {blok.link.story.name}
    </Link>
  )
}

export default MenuLink
