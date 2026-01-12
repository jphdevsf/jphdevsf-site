import { storyblokEditable } from "@storyblok/react/rsc"

const Link = ({ blok }) => {
  const {
    title,
    type,
    clickthru: { cached_url }
  } = blok
  return (
    <div className="link" {...storyblokEditable(blok)}>
      {type === "underline" && (
        <a href={cached_url} className="inline-block my-2 py-3 underline">
          {title}
        </a>
      )}
      {type === "button" && (
        <a href={cached_url} className="inline-block my-3 px-5 py-3 border-2 bg-white text-black">
          {title}
        </a>
      )}
    </div>
  )
}

export default Link
