import { brunson, dm_mono, dm_sans, source_serif_4 } from "@/app/fonts"
import "./globals.css"
import { draftMode } from "next/headers"
import DraftModeBadge from "@/components/elements/DraftModeBadge"
import Footer from "@/components/templates/Footer"
import Header from "@/components/templates/header/Header"
import Logo from "@/components/templates/header/Logo"
import Navigation from "@/components/templates/header/Navigation"

export { siteMetadata as metadata } from "./seo/metadata"

// Forcing dynamic rendering here to support visual editor draft mode with a single production environment. Hurts performance on static render side, but we still have netlify edge cache.
// Consider removing if we move to dedicated preview environment.
export const dynamic = "force-dynamic"

const RootLayout = async ({ children }) => {
  const { isEnabled } = await draftMode()
  return (
    <html lang="en">
      <body
        className={`${source_serif_4.variable} ${brunson.variable} ${dm_sans.variable} ${dm_mono.variable}`}
      >
        {isEnabled && <DraftModeBadge />}
        <Header>
          <Logo />
          <Navigation draftModeIsEnabled={isEnabled} />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
