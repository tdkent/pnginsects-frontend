"use client";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkModeSelect() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => setIsDark((prev) => !prev);
  return (
    <div>
      {isDark ? (
        <MoonIcon className='w-8 h-8 text-black' onClick={handleClick} />
      ) : (
        <SunIcon className='w-8 h-8 text-black' onClick={handleClick} />
      )}
    </div>
  );
}