import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
import TextGroup from "@/components/TextGroup"

// import Image from "next/image"

const Card = ({ blok }) => {
  return (
    <div
      className="card w-full m-4 border-1 border-gray-300 rounded-lg overflow-hidden shadow-md"
      {...storyblokEditable(blok)}
    >
      {/* <a href={blok.link.url}> */}
      {blok.image?.filename && (
        <div className="relative w-full aspect-4/3 overflow-hidden justify-center items-center">
          <img
            className="relative w-full h-full object-cover"
            src={blok.image.filename}
            alt={blok.image.alt || ""}
          />
        </div>
      )}
      <div className="relative block text-black p-4">
        {blok.textgroups.map(nestedBlok => (
          <TextGroup blok={nestedBlok} size="sm" key={nestedBlok._uid} />
        ))}
      </div>
      {/* </a> */}
    </div>
  )
}

export default Card
