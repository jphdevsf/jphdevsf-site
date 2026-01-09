import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"

const TextGroup = ({ blok }) => {
  const { textAlign } = blok
  const textAlignClass =
    textAlign === "left"
      ? "text-left"
      : textAlign === "center"
        ? "text-center"
        : textAlign === "right"
          ? "text-right"
          : "text-center"
  return (
    <div className={`textgroup ${textAlignClass}`} {...storyblokEditable(blok)}>
      <h2 className="text-[1.75em] inline-block">
        <span className={`${textAlignClass} font-leadin font-light italic text-leadin block`}>
          {blok.leadin}
        </span>
        <span className={`${textAlignClass} font-title font-light tracking-wider text-title block`}>
          {blok.title}
        </span>
      </h2>
      <span className={`${textAlignClass} font-body text-body block`}>{blok.body}</span>
      {blok.link &&
        blok.link.length > 0 &&
        blok.link.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default TextGroup
