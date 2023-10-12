"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "./Navbar"
import MobileNavSelect from "./MobileNavSelect"
import DarkModeSelect from "./DarkModeSelect"
import logo from "../../public/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")
  }, [isOpen])
  return (
    <header className="z-50 w-screen border-primary-300 bg-gradient-to-r from-primary-800 to-primary-600 dark:bg-gradient-to-b dark:from-black dark:to-black max-lg:border-t-2 max-lg:dark:from-25% lg:sticky lg:top-0 lg:bg-gradient-to-b dark:lg:from-primary-800 dark:lg:to-black">
      <div className="flex h-[64px] max-w-[1536px] items-center justify-between px-5 sm:h-[72px] md:px-8 xl:px-14 3xl:mx-auto">
        <div className="flex items-center gap-x-6 md:gap-x-9 lg:gap-x-12">
          <Link href="/" onClick={() => setIsOpen(false)} role="button">
            <h1 className="text-primary-300 dark:text-primary-100 sm:text-2xl lg:text-3xl lg:dark:text-primary-200 xl:text-4xl">
              Insects of
              <span className="text-2xl leading-5 text-primary-100 dark:text-primary-300 max-sm:block sm:pl-2 lg:text-3xl xl:pl-3 xl:text-4xl">
                Papua New Guinea
              </span>
            </h1>
          </Link>
          <div className="flex items-center overflow-hidden max-sm:hidden sm:h-[72px]">
            <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full border-[3px] border-primary-300 bg-neutral-50 opacity-90 sm:h-[120px] sm:w-[120px]">
              <Image
                src={logo}
                alt="Butterfly logo"
                fill
                sizes="114px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 sm:gap-x-6">
          <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
          <DarkModeSelect />
        </div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}

export default Header
