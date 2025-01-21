"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/24/outline"

import { NavName, NavLink } from "@/utils/models"

const links: NavLink[] = [
  {
    id: 1,
    text: NavName.home,
    root: true,
  },
  {
    id: 2,
    text: NavName.blattodea,
  },
  {
    id: 3,
    text: NavName.coleoptera,
  },
  {
    id: 4,
    text: NavName.diptera,
  },
  {
    id: 5,
    text: NavName.hemiptera,
  },
  {
    id: 6,
    text: NavName.hymenoptera,
  },
  {
    id: 7,
    text: NavName.lepidoptera,
    sublinks: [
      { id: 1, text: NavName.butterflies },
      { id: 2, text: NavName.moths },
    ],
  },
  {
    id: 8,
    text: NavName.mantodea,
  },
  {
    id: 9,
    text: NavName.odonata,
    sublinks: [
      { id: 1, text: NavName.dragonfiles },
      { id: 2, text: NavName.damselflies },
    ],
  },
  {
    id: 10,
    text: NavName.orthoptera,
  },
  {
    id: 11,
    text: NavName.phasmida,
  },
  {
    id: 12,
    text: NavName.trichoptera,
  },
]

interface Props {
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  const [isSubnav, setIsSubnav] = useState(false)
  const [hoveredId, setHoveredId] = useState(0)
  const handleClick = () => setIsOpen(false)
  const pathname = usePathname()
  return (
    <nav
      className={`${
        isOpen ? "max-lg:left-0" : "max-lg:left-full"
      } fixed top-[66px] w-screen border-y border-b-primary-600 border-t-primary-400 from-primary-800 to-primary-600 dark:border-neutral-800 dark:from-black dark:to-black max-lg:bottom-0 max-lg:z-50 max-lg:h-screen max-lg:overflow-y-auto max-lg:overflow-x-hidden max-lg:bg-gradient-to-r max-lg:pb-[72px] sm:top-[74px] lg:absolute lg:left-0 lg:top-[72px] lg:bg-primary-600 lg:dark:bg-black`}
    >
      <ul className="max-lg:h-[calc(100% + 4rem)] relative flex max-w-[1536px] flex-col p-6 pb-24 font-light text-primary-200 dark:text-neutral-300 max-lg:gap-y-6 max-lg:overflow-y-auto sm:gap-y-8 sm:text-lg md:p-8 md:pb-32 lg:flex-row lg:justify-between lg:gap-x-4 lg:py-3 lg:text-xs xl:px-14 xl:text-sm 3xl:mx-auto">
        {links
          .sort((a, b) => a.id - b.id)
          .map(({ id, text, root, sublinks }) => {
            const isActive =
              pathname.slice(1) === text.toLowerCase() ||
              (text === "Home" && pathname === "/")
            return (
              <React.Fragment key={id}>
                {sublinks ? (
                  <li
                    className="group"
                    onMouseEnter={() => {
                      setIsSubnav(true)
                      setHoveredId(id)
                    }}
                    onMouseLeave={() => {
                      setIsSubnav(false)
                      setHoveredId(0)
                    }}
                  >
                    <span className="max-lg:text-primary-400 max-lg:dark:text-primary-300 lg:flex lg:items-center lg:gap-x-1 lg:hover:cursor-pointer">
                      {isSubnav && id === hoveredId ? (
                        <ChevronDownIcon className="h-2.5 w-2.5 max-lg:hidden" />
                      ) : (
                        <ChevronRightIcon className="h-2.5 w-2.5 max-lg:hidden" />
                      )}
                      {text}
                    </span>
                    <ul className="absolute flex flex-col gap-y-6 pt-6 sm:gap-y-8 lg:hidden lg:w-[88px] lg:bg-primary-600 lg:p-2 lg:text-primary-50 lg:group-hover:block lg:dark:border lg:dark:border-neutral-800 lg:dark:bg-black lg:dark:text-neutral-300 xl:w-[98px]">
                      {sublinks.map((sublink) => {
                        const isActive =
                          pathname.split("/")[2] === sublink.text.toLowerCase()
                        return (
                          <li
                            key={sublink.id}
                            className={`${
                              isActive && "text-white"
                            } px-8 hover:text-white lg:px-0 lg:py-2`}
                          >
                            <Link
                              href={`/${text.toLowerCase()}/${sublink.text.toLowerCase()}`}
                              onClick={handleClick}
                            >
                              {sublink.text}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                ) : (
                  <li
                    className={`${isActive && "text-white"} hover:text-white`}
                  >
                    <Link
                      href={root ? "/" : `/${text.toLowerCase()}`}
                      onClick={handleClick}
                      className="flex items-center gap-x-1"
                    >
                      {root && <HomeIcon className="h-4 w-4" />}
                      {text}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            )
          })}
      </ul>
    </nav>
  )
}

export default Navbar
