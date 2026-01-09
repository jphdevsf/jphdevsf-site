import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
import Image from "next/image"

const Hero = ({ blok }) => {
  const { align } = blok
  const flexAlignClass =
    align === "left"
      ? "items-start"
      : align === "center"
        ? "items-center"
        : align === "right"
          ? "items-end"
          : "items-center"
  return (
    <div
      className="hero bg-red-950 text-xs md:text-sm lg:text-md relative block aspect-3/4 md:aspect-video"
      {...storyblokEditable(blok)}
    >
      {blok.image?.filename && (
        <Image
          className="mask-l-from-10%"
          src={blok.image.filename}
          fill={true}
          alt={blok.image.alt || ""}
        />
      )}

      {blok.textgroups && blok.textgroups.length > 0 && (
        <div
          className={`text-groups-container relative md:absolute white top-0 left-0 w-full h-full flex flex-col p-8 md:p-12 justify-center ${flexAlignClass}`}
        >
          <div className="md:max-w-2/3 lg:max-w-1/2 relative block text-white">
            {blok.textgroups.map(nestedBlok => (
              <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
