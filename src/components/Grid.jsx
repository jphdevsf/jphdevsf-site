import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="grid max-w-[1440] my-8 mx-auto">
    <h2 className="font-title text-title">{blok.Title}</h2>
    {blok.Cards && blok.Cards.length > 0 && (
      <div className="flex flex-column md:flex-row justify-center flex-wrap lg:flex-nowrap">
        {blok.Cards.map(nestedBlok => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    )}
  </div>
)

export default Grid
