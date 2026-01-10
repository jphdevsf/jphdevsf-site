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
      <h2 className="inline-block">
        <span
          className={`${textAlignClass} font-leadin text-leadin-mob md:text-leadin  font-light italic block`}
        >
          {blok.leadin}
        </span>
        <span
          className={`${textAlignClass} font-title text-title-mob md:text-title  font-light tracking-wider block`}
        >
          {blok.title}
        </span>
      </h2>
      <span className={`${textAlignClass} font-body text-body-mob md:text-body  block`}>
        {blok.body}
      </span>
      {blok.link &&
        blok.link.length > 0 &&
        blok.link.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default TextGroup
