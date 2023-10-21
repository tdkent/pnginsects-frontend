import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"

import Header from "components/layout/Header"
import BackToTop from "@/components/layout/BackToTop"
import Footer from "components/layout/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  applicationName: "Insects of Papua New Guinea",
  title: "Insects of Papua New Guinea",
  description:
    "Images and text documenting the insects of Papua New Guinea, grouped by order and family.",
  authors: [{ name: "James Wareing" }],
  keywords: ["Insects", "Papua New Guinea"],
  icons: {
    icon: "./icon.png",
    apple: "./apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <div id="backdrop" />
        <div id="modal" />
        <div id="wrapper">
          <div className="min-h-[calc(100vh-190px)]">
            <Header />
            <main>{children}</main>
          </div>
          <BackToTop />
          <Footer />
        </div>
      </body>
    </html>
  )
}
