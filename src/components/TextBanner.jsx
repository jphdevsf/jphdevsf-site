import { storyblokEditable } from '@storyblok/react/rsc';

const TextBanner = ({ blok }) => {
	return (
		<div className="textbanner" {...storyblokEditable(blok)}>
			<h1>{blok.texttitle}</h1>
			<p>{blok.textbody}</p>
		</div>
	);
};

export default TextBanner;
