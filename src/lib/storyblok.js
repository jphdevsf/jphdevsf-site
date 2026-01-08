import Page from '@/components/Page';
import TextBanner from '@/components/TextBanner';
import Hero from '@/components/Hero';
import TextGroup from '@/components/TextGroup';
import Link from '@/components/Link';

// import Feature from '@/components/Feature';
// import Grid from '@/components/Grid';
// import Teaser from '@/components/Teaser';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		// feature: Feature,
		// grid: Grid,
		// teaser: Teaser,
		textbanner: TextBanner,
		hero: Hero,
		textgroup: TextGroup,
		link: Link
	},
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});
