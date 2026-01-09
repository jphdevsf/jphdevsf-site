import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"

const TextBanner = ({ blok }) => {
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
    <div className="textbanner my-8" {...storyblokEditable(blok)}>
      <div
        className={`text-groups-container relative black w-full h-full flex flex-col px-8 pt-24 pb-24 md:p-12 justify-center ${flexAlignClass}`}
      >
        {blok.textgroups?.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}

export default TextBanner
