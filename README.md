
# jphdevsf-site

Hi there! Here we have a quick POC website demonstrating modern full-stack development using Next.js with Storyblok headless CMS, all deployed to Netlify free-tier and tinkering with Netlify edge functions. [View the site here](https://jphdevsf-portfolio-site.netlify.app/).

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Storyblok](https://img.shields.io/badge/Storyblok-CMS-09b3af?style=for-the-badge&logo=storyblok)](https://www.storyblok.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify)](https://www.netlify.com/)

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Storyblok account (free tier available)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jphdevsf-site.git
   cd jphdevsf-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   STORYBLOK_DELIVERY_API_TOKEN=your_storyblok_access_token
   STORYBLOK_API_BASE_URL=https://api.storyblok.com/v2
   STORYBLOK_REGION=eu
   ```

4. **Get your Storyblok access token**
   - Go to your Storyblok space
   - Navigate to **Settings** > **Access Tokens**
   - Copy the preview token
   - Add it to your `.env` file
Upda
## Tech Stack Overview

| Technology | Description |
|------------|-------------|
| **Node.js** | JavaScript runtime for server-side execution |
| **Next.js** | React framework for full-stack web apps, with SSR & SSG features |
| **React** | UI library |
| **Storyblok** | Headless CMS with visual editor |
| **TailwindCSS** | CSS utility class framework for rapid UI development (v4) |
| **Motion (Formerly Framer Motion)** | React animation library |
| **Netlify** | Serverless hosting platform with edge network and edge functions |
| **Biome** | Fast linter and formatter for JavaScript/TypeScript |
| **TypeScript** | Adds types to JavaScript, used in this project for netlify edge functions |

## Project Structure

```
jphdevsf-site/
├── src/
│   ├── app/             
│   │   ├── globals.css  
│   │   ├── layout.js    
│   │   ├── not-found.js 
│   │   ├── [[...slug]]/ 
│   │   │   └── page.j
│   │   ├── favicons/    
│   │   └── fonts/       
│   ├── components/      
│   │   ├── blocks/      
│   │   │   ├── Card.jsx
│   │   │   ├── Feature.jsx
│   │   │   ├── FileDownload.jsx
│   │   │   ├── GithubWidget.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MarkdownSection.jsx
│   │   │   ├── MarkdownSection.module.css
│   │   │   └── TextBanner.jsx
│   │   ├── elements/     
│   │   │   ├── Motion.jsx
│   │   │   ├── SBPicture.jsx
│   │   │   ├── TextGroup.jsx
│   │   │   └── TextLink.jsx
│   │   ├── header/       
│   │   │   ├── Header.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── MenuLink.jsx
│   │   │   └── Navigation.jsx
│   │   └── templates/    
│   │       ├── Footer.jsx
│   │       └── Page.jsx
│   └── lib/              
│       ├── getStoryBlokData.js
│       ├── storyblok.js # Storyblok configuration
│       └── storyblokImageUrl.js
├── netlify/
│   ├── edge-functions/  
│   │   └── cache-page.ts
│   └── functions/       
│       └── revalidate.js
├── public/              
│   ├── fonts/
│   └── image/
└── configuration files  # See Configuration Files section
```

## Development

### Available CLI Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Spin up local server for development |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run Biome linter to check code quality |
| `npm run format` | Run Biome formatter to tidy up files in bulk |
| `netlify build` | Test Netlify build locally to catch configuration errors |
| `netlify dev` | Run Netlify development server with edge functions support |

## Deployment

This project is configured for Netlify deployment. Simply push to main branch of GitHub repo triggers automatic deployment


### Selective Cache clearing (ISR) with Netlify & Storyblok
- `cache-page.ts` – This Netlify edge function is configured to cache all GET requests to the site for faster load times.
- `revalidate.js` – This Netlify function is configured to "revalidate" or clear cache of a particular "story" or page slug passed in the json request.
- In Storyblok dashboard, a webhook is set up to fire the Netlify revalidate function whenever a "story" or page update is published.
- 
```

## Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration (v4)
- `postcss.config.mjs` - PostCSS configuration
- `biome.json` - Biome linting and formatting configuration
- `netlify.toml` - Netlify deployment configuration

