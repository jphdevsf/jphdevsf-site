
# jphdevsf-site

This POC showcases modern full‑stack development using Next.js and the Storyblok headless CMS, deployed on Netlify with its global edge network for fast, cached delivery. [View the site here](https://jphdevsf-portfolio-site.netlify.app/).

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
   git clone https://github.com/jphdevsf/jphdevsf-site
   cd jphdevsf-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create copy of `.env.example` and rename as `.env` file in the root directory and add respective values:
   ```env
   STORYBLOK_DELIVERY_API_TOKEN=<REPLACE_WITH_YOUR_TOKEN>
   STORYBLOK_API_BASE_URL=https://api.storyblok.com
   STORYBLOK_REGION=<REPLACE_WITH_SPACE_REGION>
   REVALIDATE_SECRET_TOKEN=<REPLACE WITH MANUALLY GENERATED 32 CHAR SECRET>
   NEXT_PUBLIC_SITE_URL=<REPLACE WITH DEPLOYED URL FOR APP>
   ```

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

## Project Structure

```
jphdevsf-site/
├── src/
│   ├── app/             
│   │   ├── favicons/
│   │   ├── fonts/
│   │   ├── globals.css  
│   │   ├── layout.js    
│   │   ├── not-found.js 
│   │   ├── [[...slug]]/ 
│   │   │   └── page.js  
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
│   │   └── templates/    
│   │       ├── Footer.jsx
│   │       ├── header/       
│   │       │   ├── Header.jsx
│   │       │   ├── Logo.jsx
│   │       │   ├── MenuLink.jsx
│   │       │   └── Navigation.jsx
│   │       └── Page.jsx
│   └── lib/              
│       ├── getStoryBlokData.js
│       ├── storyblok.js # Storyblok configuration
│       └── storyblokImageUrl.js
├── netlify/
│   └── edge-functions/
│       └── cache-page.js
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


### Edge Cache with Netlify
- `cache-page.js` – This Netlify edge function is configured to cache all GET requests to the site for faster load times with a 1-hour cache duration.
- `layout.js` – Uses `force-dynamic` rendering to bypass Next.js cache while relying on Netlify edge cache for performance.
- The edge cache handles content delivery automatically without manual revalidation needed.
-
```

## Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration (v4)
- `postcss.config.mjs` - PostCSS configuration
- `biome.json` - Biome linting and formatting configuration
- `netlify.toml` - Netlify deployment configuration

