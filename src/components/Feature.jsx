import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"

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
      className="feature bg-red-950 relative flex flex-col md:flex-row my-8"
      {...storyblokEditable(blok)}
    >
      {blok.image?.filename && (
        <img
          className="block w-full md:w-1/2"
          src={blok.image.filename}
          alt={blok.image.alt || ""}
        />
      )}

      {blok.textgroups && blok.textgroups.length > 0 && (
        <div
          className={`text-groups-container relative white w-full md:w-1/2 flex flex-col p-8 md:p-12 justify-center ${flexAlignClass}`}
        >
          <div className="relative block text-white">
            {blok.textgroups.map(nestedBlok => (
              <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Feature
