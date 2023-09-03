import Link from "next/link"

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
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  const handleClick = () => setIsOpen(false)
  return (
    <nav
      className={`${
        isOpen ? "left-0" : "left-full"
      } fixed bottom-0 top-[72px] z-20 h-screen w-screen overflow-y-auto overflow-x-hidden border-t border-t-primary-500 bg-gradient-to-r from-primary-900 to-primary-700 pb-[72px] lg:relative lg:left-0 lg:top-0`}
    >
      <ul className="h-[calc(100% + 4rem)] relative flex flex-col gap-y-6 overflow-y-auto p-6 pb-10 font-light text-primary-50 lg:flex-row lg:justify-center lg:gap-x-4 lg:gap-y-0">
        {links
          .sort((a, b) => a.id - b.id)
          .map(({ id, text, root, sublinks }) => {
            return (
              <div key={id}>
                {sublinks ? (
                  <div className="group">
                    <li className="text-primary-400 lg:hover:cursor-pointer">
                      {text}
                    </li>
                    <div className="flex flex-col gap-y-6 pt-6 lg:absolute lg:hidden lg:group-hover:block">
                      {sublinks.map((sublink) => {
                        return (
                          <li key={sublink.id} className="px-8">
                            <Link
                              href={`/${text.toLowerCase()}/${sublink.text.toLowerCase()}`}
                              onClick={handleClick}
                            >
                              {sublink.text}
                            </Link>
                          </li>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <li>
                    <Link
                      href={root ? "/" : `/${text.toLowerCase()}`}
                      onClick={handleClick}
                    >
                      {text}
                    </Link>
                  </li>
                )}
              </div>
            )
          })}
      </ul>
    </nav>
  )
}

export default Navbar
