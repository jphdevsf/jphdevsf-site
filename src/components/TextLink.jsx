import { storyblokEditable } from "@storyblok/react/rsc"
import Link from "next/link"

const TextLink = ({ blok }) => {
  const {
    title,
    type,
    clickthru: { cached_url }
  } = blok
  return (
    <div className="link" {...storyblokEditable(blok)}>
      {type === "underline" && (
        <Link href={cached_url} className="inline-block my-2 py-3 underline">
          {title}
        </Link>
      )}
      {type === "button" && (
        <Link
          href={cached_url}
          className="inline-block my-3 px-5 py-3 border-2 bg-white text-black"
        >
          {title}
        </Link>
      )}
    </div>
  )
}

export default TextLink
