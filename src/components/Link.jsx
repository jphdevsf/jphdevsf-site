import { storyblokEditable } from "@storyblok/react/rsc"

const Link = ({ blok }) => {
  return (
    <div className="link" {...storyblokEditable(blok)}>
      <span>{blok.title}</span>
      <span>{blok.type}</span>
    </div>
  )
}

export default Link
