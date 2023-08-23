import { useState } from "react";
import Link from "next/link";

import { NavLink } from "models";

const links: NavLink[] = [
  {
    id: 1,
    text: "Home",
    root: true,
  },
  {
    id: 2,
    text: "Blattodea",
  },
  {
    id: 3,
    text: "Coleoptera",
  },
  {
    id: 4,
    text: "Diptera",
  },
  {
    id: 5,
    text: "Hemiptera",
  },
  {
    id: 6,
    text: "Hymenoptera",
  },
  {
    id: 7,
    text: "Lepidoptera",
    sublinks: [
      { id: 1, text: "Butterflies" },
      { id: 2, text: "Moths" },
    ],
  },
  {
    id: 8,
    text: "Mantodea",
  },
  {
    id: 9,
    text: "Odonata",
    sublinks: [
      { id: 1, text: "Dragonflies" },
      { id: 2, text: "Damselflies" },
    ],
  },
  {
    id: 10,
    text: "Orthoptera",
  },
  {
    id: 11,
    text: "Phasmida",
  },
  {
    id: 12,
    text: "Trichoptera",
  },
];

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const Navbar = ({ setIsOpen }: Props) => {
  const [showSublinks, setShowSublinks] = useState(false);
  const handleClick = () => setIsOpen(false);
  return (
    <nav>
      <ul className='flex flex-col gap-y-5 lg:flex-row lg:justify-center lg:gap-x-4 lg:gap-y-0'>
        {links
          .sort((a, b) => a.id - b.id)
          .map(({ id, text, root, sublinks }) => {
            return (
              <div key={id}>
                {sublinks ? (
                  <div className='group'>
                    <li className='lg:hover:cursor-pointer'>{text}</li>
                    <div className='lg:hidden lg:group-hover:block py-4 px-8 lg:absolute'>
                      {sublinks.map((sublink) => {
                        return (
                          <li key={sublink.id}>
                            <Link
                              href={`/${text.toLowerCase()}/${sublink.text.toLowerCase()}`}
                              onClick={handleClick}>
                              {sublink.text}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <li>
                    <Link href={root ? "/" : `/${text.toLowerCase()}`} onClick={handleClick}>
                      {text}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
