"use client"
import { useState, useEffect } from "react"
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import useStore from "@/utils/hooks"

interface Props {
  sections: string[]
}

export default function SubnavContents({ sections }: Props) {
  // intersection observer
  const [headerDiv, setHeaderDiv] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setHeaderDiv(document.getElementById("page-header-boundary"))
  }, [])
  const isPageHeaderVisible = useStore((state) => state.isPageHeaderVisible)
  const currentVisibleSection = useStore((state) => state.currentVisibleSection)

  // wait for component to mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return (
      <nav className="min-[1536]:w-1/5 w-[30%] py-20 pr-8 text-sm max-lg:hidden xl:pr-14 min-[1440px]:w-1/4">
        <div className="sticky top-[156px] w-full">Loading...</div>
      </nav>
    )
  }
  return (
    <>
      <nav className="min-[1536]:w-1/5 w-[30%] py-20 pr-8 text-sm max-lg:hidden xl:pr-14 min-[1440px]:w-1/4">
        <div className="sticky top-[156px] w-full">
          <div className="h-fit max-h-[430px] overflow-y-scroll border-b border-neutral-200 pb-2 dark:border-neutral-800">
            <div className="sticky top-0 bg-white pb-2 font-medium dark:bg-black">
              Page Contents
            </div>
            <ul className="pr-8">
              {sections &&
                sections.map((section, i) => {
                  return (
                    <li
                      key={i}
                      className={`py-1.5 leading-6 text-neutral-500 dark:text-neutral-50 ${
                        currentVisibleSection === section &&
                        "text-primary-600 dark:text-primary-300"
                      } hover:text-neutral-900 dark:hover:text-primary-300`}
                    >
                      <Link href={`#${section}`}>{section}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
          <a
            href="#"
            className={`${
              !headerDiv || isPageHeaderVisible ? "opacity-0" : "opacity-100"
            } mt-4 flex w-fit items-center gap-x-1.5 text-neutral-600 transition-opacity duration-300 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-primary-300`}
          >
            Back to top
            <ArrowUpCircleIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </>
  )
}
