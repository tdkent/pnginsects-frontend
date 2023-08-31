"use client"
import { useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function DarkModeSelect() {
  const [isDark, setIsDark] = useState(false)
  const handleClick = () => setIsDark((prev) => !prev)
  return (
    <div className="">
      {isDark ? (
        <MoonIcon className="h-8 w-8 text-primary-100" onClick={handleClick} />
      ) : (
        <SunIcon className="h-8 w-8 text-primary-100" onClick={handleClick} />
      )}
    </div>
  )
}
