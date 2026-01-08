import { storyblokEditable,
	StoryblokServerComponent
 } from '@storyblok/react/rsc';

const Hero = ({ blok }) => {
	return (
		<div className="hero" {...storyblokEditable(blok)}>
			{blok.textgroups.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
			<span>{blok.image?.filename && (
				<img src={blok.image.filename} alt={blok.image.alt || ''} />
			)}</span>
		</div>
	);
};

export default Hero;
