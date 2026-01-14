import { storyblokEditable } from "@storyblok/react/rsc"
import Link from "next/link"
import { Motion } from "@/components/elements/Motion"

const TextLink = ({ blok }) => {
  const {
    title,
    type,
    clickthru: { cached_url }
  } = blok
  return (
    <div className="link" {...storyblokEditable(blok)}>
      {type === "underline" && (
        <Motion variants="fadeIn" delay={0.75}>
          <Link href={cached_url} className="inline-block my-2 py-3 underline">
            {title}
          </Link>
        </Motion>
      )}
      {type === "button" && (
        <Motion variants="fadeIn" delay={0.75}>
          <Link
            href={cached_url}
            className="inline-block my-3 px-5 py-3 border-2 border-indigo-950 bg-white text-black"
          >
            {title}
          </Link>
        </Motion>
      )}
    </div>
  )
}

export default TextLink
