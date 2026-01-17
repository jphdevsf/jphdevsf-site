import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
import { Motion } from "@/components/elements/Motion"

const getTextAlignClass = align => {
  const map = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }
  return map[align] || "text-center"
}

const sizeStyles = {
  leadin: {
    sm: "text-leadin-sm-mob md:text-leadin-sm",
    md: "text-leadin-mob md:text-leadin",
    lg: "text-leadin-lg-mob md:text-leadin-lg"
  },
  title: {
    sm: "text-title-sm-mob md:text-title-sm",
    md: "text-title-mob md:text-title",
    lg: "text-title-lg-mob md:text-title-lg"
  },
  body: {
    sm: "font-body text-body-mob md:text-body",
    md: "text-body-mob md:text-body",
    lg: "text-body-lg-mob md:text-body-lg"
  }
}

/**
 * This Component represents standard content model for a group of text elements used on all banners.
 */
const TextGroup = ({ blok, size = "lg" }) => {
  const { textAlign } = blok

  return (
    <div className={`textgroup ${getTextAlignClass(textAlign)}`} {...storyblokEditable(blok)}>
      <h2 className="inline-block">
        {blok.leadin && (
          <Motion variants="slideFromBottom" delay={0.2}>
            <span
              className={`${getTextAlignClass(textAlign)} font-leadin ${sizeStyles.leadin[size]} font-light italic block`}
            >
              {blok.leadin}
            </span>
          </Motion>
        )}

        {blok.title && (
          <Motion variants="slideFromBottom" delay={0.3}>
            <span
              className={`${getTextAlignClass(textAlign)} font-title ${sizeStyles.title[size]} font-light tracking-wider block`}
            >
              {blok.title}
            </span>
          </Motion>
        )}
      </h2>
      {blok.body && (
        <Motion variants="slideFromBottom" delay={0.4}>
          <p className={`${getTextAlignClass(textAlign)} font-body ${sizeStyles.body[size]} block`}>
            {blok.body}
          </p>
        </Motion>
      )}
      {blok.links &&
        blok.links.length > 0 &&
        blok.links.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default TextGroup
