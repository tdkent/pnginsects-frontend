import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"

import Header from "components/layout/Header"
import Footer from "components/layout/Footer"

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <div id="backdrop" />
        <div id="modal" />
        <div id="wrapper" className="bg-primary-50">
          <div className="min-h-[calc(100vh-190px)]">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
