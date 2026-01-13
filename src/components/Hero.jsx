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
    <article className="hero bg-indigo-950 relative block" {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <div className="aspect-square md:aspect-video overflow-hidden">
          <img
            className="mask-l-from-5% object-cover w-full h-full"
            src={blok.image.filename}
            alt={blok.image.alt || ""}
          />
        </div>
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
    </article>
  )
}

export default Hero
