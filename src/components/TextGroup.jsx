import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const TextGroup = ({ blok }) => {
	return (
		<div className="textgroup" {...storyblokEditable(blok)}>
			<h1>
				<span className="leadin" >{blok.leadin}</span>
				<span className="title">{blok.title}</span>
			</h1>
				<span className="leadin" >{blok.body}</span>
			{blok.link?.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};

export default TextGroup;
