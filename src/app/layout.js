import { brunson, dm_mono, dm_sans, source_serif_4 } from "@/app/fonts"
import "./globals.css"
import StoryblokProvider from "@/components/StoryblokProvider"
import Footer from "@/components/templates/Footer"
import Header from "@/components/templates/header/Header"
import Logo from "@/components/templates/header/Logo"
import Navigation from "@/components/templates/header/Navigation"

export const dynamic = "force-dynamic"

export { siteMetadata as metadata } from "./seo/metadata"

const RootLayout = ({ children }) => {
  return (
    <StoryblokProvider>
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
    </StoryblokProvider>
  )
}

export default RootLayout
