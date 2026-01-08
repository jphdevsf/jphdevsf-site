import { storyblokEditable } from '@storyblok/react/rsc';

const Link = ({ blok }) => {
	return (
		<div className="link" {...storyblokEditable(blok)}>
			<span>{blok.name}</span>
		</div>
	);
};

export default Link;
