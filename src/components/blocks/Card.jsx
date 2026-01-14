import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
import SBPicture from "@/components/elements/SBPicture"

// import TextGroup from "@/components/TextGroup"

// import Image from "next/image"

const Card = ({ blok }) => {
  return (
    <div
      className="card relative w-full m-4 border border-gray-300 rounded-lg overflow-hidden shadow-md"
      {...storyblokEditable(blok)}
    >
      {/* <a href={blok.link.url}> */}
      {blok.image?.filename && (
        <div className="relative w-full aspect-4/3 overflow-hidden justify-center items-center border-b border-gray-300">
          <SBPicture
            src={blok.image.filename}
            alt={blok.image.alt || ""}
            mobileRatio="4:3"
            desktopRatio="4:3"
            className="relative w-full h-full object-cover"
            sizes="(min-width:1440px) 500px, 30vw"
          />
        </div>
      )}
      <div className="relative block text-black p-4">
        {blok.textgroups.map(nestedBlok => (
          // <TextGroup blok={nestedBlok} size="sm" key={nestedBlok._uid} />
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} size="sm" />
        ))}
      </div>
      {/* </a> */}
    </div>
  )
}

export default Card
