"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")
  }, [isOpen])
  return (
    <header className="z-50 flex h-[64px] w-screen items-center justify-between bg-gradient-to-r from-primary-900 to-primary-700 px-5 pb-4 pt-2 sm:h-[72px] md:px-8 lg:sticky lg:top-0 lg:bg-gradient-to-b">
      <Link href="/">
        <h1
          className="text-primary-300 sm:text-2xl lg:text-3xl xl:text-4xl"
          onClick={() => setIsOpen(false)}
        >
          Insects of
          <span className="text-2xl leading-5 text-primary-100 max-sm:block sm:pl-2 lg:text-3xl xl:pl-3 xl:text-4xl">
            Papua New Guinea
          </span>
        </h1>
      </Link>
      <div className="flex gap-x-2 sm:gap-x-6">
        <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
        <DarkModeSelect />
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header
