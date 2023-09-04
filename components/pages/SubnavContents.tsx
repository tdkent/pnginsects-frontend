"use client"
import Link from "next/link"

import MobileSubnav from "./MobileSubnav"
import { shortenSectionName } from "@/utils/funcs"
import useStore from "@/utils/hooks"

interface Props {
  sections: string[]
}

export default function SubnavContents({ sections }: Props) {
  const isVisible = useStore((state) => state.isVisible)
  return (
    <aside
      className={`${
        isVisible ? "opacity-0" : "opacity-100"
      } sticky top-0 z-10 w-full border-y border-primary-700 bg-primary-50/90 py-3 font-semibold text-primary-700 transition-opacity duration-300 lg:w-1/5`}
    >
      {/* Mobile subnav */}
      <MobileSubnav sections={sections} />
      {/* Desktop subnav */}
      <nav className="max-lg:hidden">
        <ul>
          {sections &&
            sections.map((section, i) => {
              const shortSection = shortenSectionName(section)
              return (
                <li key={i}>
                  <Link href={`#${shortSection}`}>{shortSection}</Link>
                </li>
              )
            })}
          xw
        </ul>
      </nav>
    </aside>
  )
}
