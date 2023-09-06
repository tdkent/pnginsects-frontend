"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline"

import { shortenSectionName } from "@/utils/funcs"
import useStore from "@/utils/hooks"

interface Props {
  sections: string[]
}

export default function MobileSubnav({ sections }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  // lock scroll
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")
  }, [isOpen])
  // intersection observer state
  const [headerDiv, setHeaderDiv] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setHeaderDiv(document.getElementById("page-header-boundary"))
  }, [])
  const isVisible = useStore((state) => state.isPageHeaderVisible)
  return (
    <div className="flex flex-col lg:hidden">
      <div className="flex items-center justify-between px-4 md:px-8 lg:hidden">
        <div
          className="flex items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
          <div className="pl-2">Page contents</div>
        </div>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className={`${
            !headerDiv || isVisible ? "opacity-0" : "opacity-1"
          } flex items-center px-1 transition-opacity duration-300`}
        >
          <div className="pr-2">Back to top</div>
          <ArrowUpIcon className="h-4 w-4" />
        </a>
      </div>
      {isOpen && (
        <nav className="h-screen px-4 py-3">
          <ul className="h-[calc(100vh-230px)] overflow-y-scroll border border-neutral-300 bg-white py-2 text-neutral-900">
            {sections &&
              sections.map((section, i) => {
                const shortSection = shortenSectionName(section)
                return (
                  <li
                    key={i}
                    className="px-6 py-3 text-sm md:px-8 md:py-4"
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
