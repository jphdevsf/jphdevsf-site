export const siteMetadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "JPHDEVSF | Portfolio Site",
    template: "%s | JPHDEVSF"
  },
  description:
    "A modern full-stack portfolio site built with Next.js, Storyblok, and Netlify edge functions",
  keywords: ["portfolio", "web development", "next.js", "storyblok", "netlify", "react"],
  authors: [{ name: "Jacob" }],
  creator: "Jacob",
  publisher: "Jacob",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jphdevsf-portfolio-site.netlify.app/",
    siteName: "JPHDEVSF",
    title: "JPHDEVSF | Portfolio Site",
    description:
      "A modern full-stack portfolio site built with Next.js, Storyblok, and Netlify edge functions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JPHDEVSF Portfolio Site"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "JPHDEVSF | Portfolio Site",
    description:
      "A modern full-stack portfolio site built with Next.js, Storyblok, and Netlify edge functions",
    images: ["/logo.png"],
    creator: "@yourhandle"
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png"
  },
  manifest: "/favicons/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification"
  }
}
