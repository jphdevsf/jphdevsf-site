import { storyblokEditable,
	StoryblokServerComponent
 } from '@storyblok/react/rsc';

const TextBanner = ({ blok }) => {
	return (
		<div className="textbanner" {...storyblokEditable(blok)}>
			<p>{blok.align}</p>
			{blok.textgroups?.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};

export default TextBanner;
