import Link from "next/link";

import { NavName, NavLink } from "models";

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
];

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const Navbar = ({ setIsOpen }: Props) => {
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
