"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

import Loading from "./Loading"

interface Props {
  sections: string[]
}

export default function SubnavContents({ sections }: Props) {
  // wait for component to mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <>
      <nav className="w-1/4 text-sm max-lg:hidden">
        <div className="w-full">
          <div
            className={`h-fit max-h-[300px] overflow-y-scroll ${
              mounted ? "border-b" : "border-none"
            } border-neutral-200 bg-neutral-50 pl-2 pr-4 dark:border-neutral-800 dark:bg-black`}
          >
            <div className="sticky top-0 bg-neutral-50 py-2 font-medium dark:bg-black">
              Page Contents
            </div>
            {mounted ? (
              <ul className="">
                {sections &&
                  sections.map((section, i) => {
                    return (
                      <li
                        key={i}
                        className="py-1.5 leading-6 text-neutral-500 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-primary-300"
                      >
                        <Link href={`#${section}`}>{section}</Link>
                      </li>
                    )
                  })}
              </ul>
            ) : (
              <div className="mb-4">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
