"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

import { shortenSectionName } from "@/utils/funcs"

interface Props {
  sections: string[]
}

export default function PageIndexSelect({ sections }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  // lock scroll
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")
  }, [isOpen])
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 lg:hidden">
        <div
          className="flex items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
          <div className="pl-2">Species on this page</div>
        </div>
      </div>
      {isOpen && (
        <nav className="h-screen px-4 py-3">
          <ul className="h-[calc(100vh-230px)] overflow-y-scroll border border-neutral-300 bg-white py-2 text-neutral-900">
            {sections.map((section, i) => {
              const shortSection = shortenSectionName(section)
              return (
                <li
                  key={i}
                  className="px-6 py-3 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={`#${shortSection}`}>{shortSection}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}
