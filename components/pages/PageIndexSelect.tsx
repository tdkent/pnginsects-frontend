"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

import { shortenSectionName } from "@/utils/funcs"

interface Props {
  sections: string[]
}

export default function PageIndexSelect({ sections }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronRightIcon className="h-4 w-4" />
        )}
        <div className="pl-2">On this page</div>
      </div>
      {isOpen && (
        <nav className="py-3 pl-6 text-neutral-700">
          <ul>
            {sections.map((section, i) => {
              const shortSection = shortenSectionName(section)
              return (
                <li
                  key={i}
                  className="py-2 text-sm"
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