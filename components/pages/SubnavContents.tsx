"use client"
import Link from "next/link"

import MobileSubnav from "./MobileSubnav"
import useStore from "@/utils/hooks"

interface Props {
  sections: string[]
}

export default function SubnavContents({ sections }: Props) {
  const isVisible = useStore((state) => state.isFooterVisible)
  return (
    <aside
      className={`${
        isVisible ? "opacity-0" : "opacity-100"
      } sticky top-0 z-10 w-full border-y border-primary-700 bg-primary-50/95 py-3 font-semibold text-primary-700 transition-opacity duration-300 lg:fixed lg:right-0 lg:top-[113px] lg:h-[calc(100vh-160px)] lg:w-[30%] lg:overflow-y-scroll lg:border-none lg:bg-white lg:py-12 lg:pr-6 lg:text-sm lg:font-normal lg:text-neutral-900`}
    >
      {/* Mobile subnav */}
      <MobileSubnav sections={sections} />
      {/* Desktop subnav */}
      <nav className="max-lg:hidden">
        <ul className="">
          <div className="mb-1.5 font-medium">Page Contents</div>
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
      </nav>
    </aside>
  )
}
