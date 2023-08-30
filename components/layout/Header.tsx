"use client"
import { useState } from "react"
import { Grenze_Gotisch } from "next/font/google"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"

const grenzeGotisch = Grenze_Gotisch({ subsets: ["latin"] })

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="border-b">
      {/* flex col */}
      <div className="flex flex-col">
        <div className="flex justify-end">
          {/* Navigation elements, dark mode */}
          {/* This elements sits on top in mobile layout */}
          <div className="lg:hidden">
            <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div>
            <DarkModeSelect />
          </div>
        </div>
        <div className="flex justify-center">
          {/* Logo, site title */}
          <h1 className={grenzeGotisch.className}>
            Insects of Papua New Guinea
          </h1>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "left-0" : "left-full"
        } bg-white fixed top-16 w-full lg:relative lg:left-0 lg:top-0`}
      >
        <Navbar setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}

export default Header
