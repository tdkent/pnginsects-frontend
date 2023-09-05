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
  title: "Insects of Papua New Guinea",
  description: "Insects of PNG website",
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
        <div id="wrapper">
          <div className="min-h-[calc(100vh-80px)]">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
