import Image from "next/image"
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import { cloudinaryUrlPrefix } from "@/utils/lib/constants"
import FooterBoundary from "../pages/FooterBoundary"

const Footer = () => {
  return (
    <>
      <FooterBoundary />
      <footer className="bg-gradient-to-b from-primary-700 from-50% to-primary-900 px-5 py-10 text-sm font-light text-primary-50 md:px-8">
        <p className="mb-4 lg:mb-3">
          Any feedback, especially in relation to identifications, is always
          gratefully received.
        </p>
        <p className="mb-4 lg:mb-3">
          I welcome the use of my photos, should the appropriate credit
          naturally be given.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:justify-normal">
          <a href="mailto:jtwareing@gmail.com">
            <div className="flex items-center gap-x-2">
              <EnvelopeIcon className="mt-0.5 h-4 w-4" />
              jtwareing@gmail.com
            </div>
          </a>
          <Link
            href="https://www.inaturalist.org/people/2993351"
            target="_blank"
          >
            <div className="rounded-md border bg-[#fff] px-1.5 py-2">
              <div className="relative -mt-1 aspect-[1632/368] w-20 sm:w-24">
                <Image
                  src={`${cloudinaryUrlPrefix}/v1692732142/assets/iNat_jwwhh4.png`}
                  alt="iNaturalist logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-4 text-xs">&copy; 2023</div>
      </footer>
    </>
  )
}

export default Footer
