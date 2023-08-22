import Link from "next/link";

interface LinkProps {
  id: number;
  text: string;
  sublinks?: {
    id: number;
    text: string;
  }[];
}

const links: LinkProps[] = [
  {
    id: 1,
    text: "Blattodea",
  },
  {
    id: 2,
    text: "Coleoptera",
  },
  {
    id: 3,
    text: "Diptera",
  },
  {
    id: 4,
    text: "Hemiptera",
  },
  {
    id: 5,
    text: "Hymenoptera",
  },
  {
    id: 6,
    text: "Lepidoptera",
    sublinks: [
      { id: 1, text: "Butteflies" },
      { id: 2, text: "Moths" },
    ],
  },
  {
    id: 7,
    text: "Mantodea",
  },
  {
    id: 8,
    text: "Odonata",
    sublinks: [
      { id: 1, text: "Dragonflies" },
      { id: 2, text: "Damselflies" },
    ],
  },
  {
    id: 9,
    text: "Orthoptera",
  },
  {
    id: 10,
    text: "Phasmida",
  },
  {
    id: 11,
    text: "Trichoptera",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {links
          .sort((a, b) => a.id - b.id)
          .map(({ id, text, sublinks }) => {
            return (
              <div key={id}>
                {sublinks ? (
                  <>
                    {/* // TODO: show div on hover of li */}
                    <li>{text}</li>
                    <div>
                      <ul>
                        {sublinks.map(({ id, text }) => {
                          return (
                            <li key={id}>
                              <Link href={`/${text.toLowerCase()}`}>{text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                ) : (
                  <li>
                    <Link href={`/${text.toLowerCase()}`}>{text}</Link>
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
