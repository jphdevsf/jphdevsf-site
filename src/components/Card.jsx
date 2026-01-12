import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"

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
          // <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          <CardTextGroup blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      {/* </a> */}
    </div>
  )
}

const CardTextGroup = ({ blok }) => {
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
    <div className={`cardtextgroup ${textAlignClass}`} {...storyblokEditable(blok)}>
      <h2 className="inline-block">
        <span
          className={`${textAlignClass} font-leadin text-leadin-sm-mob md:text-leadin-sm  font-light italic block`}
        >
          {blok.leadin}
        </span>
        <span
          className={`${textAlignClass} font-title text-title-sm-mob md:text-title-sm  font-light tracking-wider block`}
        >
          {blok.title}
        </span>
      </h2>
      <span className={`${textAlignClass} font-body text-body-mob md:text-body  block`}>
        {blok.body}
      </span>
      {blok.links &&
        blok.links.length > 0 &&
        blok.links.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default Card
