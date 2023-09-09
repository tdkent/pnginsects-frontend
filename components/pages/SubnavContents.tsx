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
  useEffect(
    () => setHeaderDiv(document.getElementById("page-header-boundary")),
    []
  )
  const isPageHeaderVisible = useStore((state) => state.isPageHeaderVisible)
  return (
    <>
      <nav className="w-[30%] py-20 text-sm max-lg:hidden">
        <div className="sticky top-[156px] w-3/4">
          <div className="h-fit max-h-[430px] overflow-y-scroll border-b border-neutral-200 pb-2 pr-2">
            <div className="sticky top-0 bg-white pb-2 font-medium">
              Page Contents
            </div>
            <ul className="">
              {sections &&
                sections.map((section, i) => {
                  return (
                    <li
                      key={i}
                      className="py-1.5 leading-6 text-neutral-600 hover:text-neutral-900"
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
            } mt-4 flex w-fit items-center gap-x-1.5 text-neutral-600 transition-opacity duration-300 hover:cursor-pointer hover:text-neutral-900`}
          >
            Back to top
            <ArrowUpCircleIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </>
  )
}
