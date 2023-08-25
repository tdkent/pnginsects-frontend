import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"

import Header from "components/layout/Header"
import Footer from "components/layout/Footer"

const openSans = Open_Sans({ subsets: ["latin"] })

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
    <html lang="en">
      <body className={openSans.className}>
        <div id="backdrop" />
        <div id="modal" />
        <div id="wrapper" className="min-h-[calc(100vh-80px)]">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
