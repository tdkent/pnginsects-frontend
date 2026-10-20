import Image from "next/image"
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import FooterBoundary from "../pages/FooterBoundary"

const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <>
      <FooterBoundary />
      <footer className="border-t border-primary-600 bg-gradient-to-b from-primary-600 from-50% to-primary-800 py-10 text-xs font-light text-primary-50 dark:border-neutral-800 dark:from-black dark:to-black sm:text-sm">
        <div className="flex flex-col items-center justify-center gap-8 text-balance">
          <div className="flex flex-col gap-2 text-center">
            <p>
              Any feedback, especially in relation to identifications, is always
              gratefully received.
            </p>
            <p>
              I welcome the use of my photos, should the appropriate credit
              naturally be given.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="">&copy; {currYear}. All rights reserved.</div>
            <a
              href="mailto:jtwareing@gmail.com"
              className="flex items-center gap-x-2 hover:underline"
            >
              <EnvelopeIcon className="mt-0.5 h-4 w-4" />
              jtwareing@gmail.com
            </a>
            <Link
              href="https://www.inaturalist.org/people/2993351"
              target="_blank"
            >
              <div className="flex w-20 justify-center rounded-md border bg-[#fff] px-1 py-2 shadow-lg sm:w-24 lg:w-28">
                <div className="relative -mt-1 aspect-[1632/368] w-full">
                  <Image
                    src="https://res.cloudinary.com/dvgzr0wt3/image/upload/v1692732142/assets/iNat_jwwhh4.png"
                    alt="iNaturalist logo"
                    fill
                    sizes="(max-width: 640px) 70px, (max-width: 1024px) 86px, 102px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
