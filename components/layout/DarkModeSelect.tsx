"use client"
import { useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function DarkModeSelect() {
  const [isDark, setIsDark] = useState(false)
  const handleClick = () => setIsDark((prev) => !prev)
  return (
    <div className="">
      {isDark ? (
        <MoonIcon className="text-black h-8 w-8" onClick={handleClick} />
      ) : (
        <SunIcon className="text-black h-8 w-8" onClick={handleClick} />
      )}
    </div>
  )
}
