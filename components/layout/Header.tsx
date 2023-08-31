"use client"
import { useState } from "react"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex h-[72px] items-center justify-between bg-gradient-to-r from-primary-900 to-primary-700 px-5 pb-4 pt-2">
      <h1 className="text-primary-300">
        Insects of
        <span className="text-2xl leading-5 text-primary-100 max-md:block">
          Papua New Guinea
        </span>
      </h1>
      <div className="flex gap-x-2">
        <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
        <DarkModeSelect />
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header
