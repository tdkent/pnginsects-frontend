"use client"
import { useState } from "react"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <div className="lg:hidden">
            <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div>
            <DarkModeSelect />
          </div>
        </div>
        <div className="flex justify-center">
          <h1>Insects of Papua New Guinea</h1>
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
