import { brunson, dm_mono, dm_sans, source_serif_4 } from "@/app/fonts"
import "./globals.css"
// import { draftMode } from "next/headers"
// import DraftModeBadge from "@/components/elements/DraftModeBadge"
import Footer from "@/components/templates/Footer"
import Header from "@/components/templates/header/Header"
import Logo from "@/components/templates/header/Logo"
import Navigation from "@/components/templates/header/Navigation"

export { siteMetadata as metadata } from "./seo/metadata"

const RootLayout = async ({ children }) => {
  // const { isEnabled } = await draftMode()
  return (
    <html lang="en">
      <body
        className={`${source_serif_4.variable} ${brunson.variable} ${dm_sans.variable} ${dm_mono.variable}`}
      >
        {/* {isEnabled && <DraftModeBadge />} */}
        <Header>
          <Logo />
          {/* <Navigation draftModeIsEnabled={isEnabled} /> */}
          <Navigation />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
