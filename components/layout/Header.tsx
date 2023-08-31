"use client"
import { useState } from "react"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex items-center justify-between px-5 pb-4 pt-2">
      <h1 className="">
        Insects of
        <span className="text-2xl leading-5 max-md:block">
          Papua New Guinea
        </span>
      </h1>
      <div className="flex gap-x-2">
        <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
        <DarkModeSelect />
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
