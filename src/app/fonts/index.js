import { DM_Mono, DM_Sans, Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

export const source_serif_4 = Source_Serif_4({
  variable: "--font-source_serif_4",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export const dm_mono = DM_Mono({
  variable: "--font-dm_mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
})

export const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"]
})

export const brunson = localFont({
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
