"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline"

import useStore from "@/utils/hooks"

interface Props {
  sections: string[]
}

export default function MobileSubnavContents({ sections }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  // lock scroll
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")
  }, [isOpen])
  // intersection observer
  const [headerDiv, setHeaderDiv] = useState<HTMLElement | null>(null)
  const isFooterVisible = useStore((state) => state.isFooterVisible)
  const isPageHeaderVisible = useStore((state) => state.isPageHeaderVisible)
  useEffect(() => {
    setHeaderDiv(document.getElementById("page-header-boundary"))
  }, [])
  return (
    <nav
      className={`${
        !headerDiv || isPageHeaderVisible || isFooterVisible
          ? "pointer-events-none max-lg:opacity-0"
          : "max-lg:opacity-100"
      } sticky top-0 z-10 w-full border-y border-primary-700 bg-primary-50/95 py-3 font-semibold text-primary-700 transition-opacity duration-300 lg:hidden`}
    >
      <div className="flex flex-col lg:hidden">
        <div className="flex items-center justify-between px-4 md:px-8 lg:hidden">
          <div
            className="flex items-center hover:cursor-pointer"
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
              !headerDiv || isFooterVisible || isOpen
                ? "pointer-events-none opacity-0"
                : "opacity-1"
            } flex items-center px-1 transition-opacity duration-300`}
          >
            <div className="pr-2">Back to top</div>
            <ArrowUpIcon className="h-4 w-4" />
          </a>
        </div>
        {isOpen && (
          <div className="h-screen px-4 py-3">
            <ul className="h-[calc(100vh-160px)] overflow-y-scroll py-2 text-primary-700">
              {sections &&
                sections.map((section, i) => {
                  return (
                    <li
                      key={i}
                      className="px-6 py-3 text-sm md:px-8 md:py-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={`#${section}`}>{section}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
