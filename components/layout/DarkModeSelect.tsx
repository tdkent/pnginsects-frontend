"use client"
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function DarkModeSelect() {
  const [isDark, setIsDark] = useState(false)
  const handleClick = () => {
    isDark
      ? (localStorage.colorScheme = "light")
      : (localStorage.colorScheme = "dark")
    setIsDark((prev) => !prev)
  }
  useEffect(() => {
    if (
      localStorage.colorScheme === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark").matches &&
        !localStorage.colorScheme)
    ) {
      document.body.classList.add("dark")
      setIsDark(true)
    } else {
      document.body.classList.remove("dark")
      setIsDark(false)
    }
  }, [isDark])
  return (
    <div className="">
      {isDark ? (
        <MoonIcon
          className="h-8 w-8 text-primary-50 hover:cursor-pointer xl:h-9 xl:w-9"
          onClick={handleClick}
        />
      ) : (
        <SunIcon
          className="h-8 w-8 text-primary-100 hover:cursor-pointer xl:h-9 xl:w-9"
          onClick={handleClick}
        />
      )}
    </div>
  )
}
