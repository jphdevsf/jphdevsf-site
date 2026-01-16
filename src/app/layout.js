import { DM_Mono, DM_Sans, Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/templates/Footer"
import Header from "@/components/templates/header/Header"
import Logo from "@/components/templates/header/Logo"
import Navigation from "@/components/templates/header/Navigation"

export const metadata = {
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

const source_serif_4 = Source_Serif_4({
  variable: "--font-source_serif_4",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

const dm_mono = DM_Mono({
  variable: "--font-dm_mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
})

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"]
})

const brunson = localFont({
  src: [
    {
      path: "../../public/fonts/Brunson.woff2",
      weight: "400, 500, 600",
      style: "normal"
    }
  ],
  variable: "--font-brunson",
  display: "swap"
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${source_serif_4.variable} ${brunson.variable} ${dm_sans.variable} ${dm_mono.variable}`}
      >
        <Header>
          <Logo />
          <Navigation />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
