import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
import { Motion } from "@/components/elements/Motion"
import SBPicture from "@/components/elements/SBPicture"

const Feature = ({ blok }) => {
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
      className="feature bg-indigo-950 relative flex flex-col md:flex-row my-8 mb-12"
      {...storyblokEditable(blok)}
    >
      {blok.image?.filename && (
        <div className="aspect-square md:aspect-4/3 w-full md:w-1/2 overflow-hidden">
          <Motion variants="fadeIn" delay="0.75">
            <SBPicture
              src={blok.image.filename}
              alt={blok.image.alt || ""}
              mobileRatio="1:1"
              desktopRatio="4:3"
              className="object-cover w-full h-full"
              sizes="(min-width:768px) 50vw, 100vw"
            />
          </Motion>
        </div>
      )}

      {blok.textgroups && blok.textgroups.length > 0 && (
        <div
          className={`text-groups-container relative white w-full md:w-1/2 flex flex-col p-8 md:p-12 justify-center ${flexAlignClass}`}
        >
          <div className="relative block text-white">
            {blok.textgroups.map(nestedBlok => (
              <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} size="md" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Feature
