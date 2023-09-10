import Image from "next/image"
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import { cloudinaryUrlPrefix } from "@/utils/lib/constants"
import FooterBoundary from "../pages/FooterBoundary"

const Footer = () => {
  return (
    <>
      <FooterBoundary />
      <footer className="bg-gradient-to-b from-primary-700 from-50% to-primary-900 px-5 py-10 text-xs font-light leading-6 text-primary-50 sm:text-sm sm:leading-8 md:px-8 xl:flex xl:flex-col xl:items-center">
        <p className="mb-4 lg:mb-3">
          Any feedback, especially in relation to identifications, is always
          gratefully received. I welcome the use of my photos, should the
          appropriate credit naturally be given.
        </p>
        <div className="flex w-full flex-nowrap items-center justify-between py-2 lg:justify-start lg:gap-x-12 lg:py-6 xl:justify-center xl:gap-x-24 xl:py-8">
          <div className="">&copy; 2023</div>
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
                  src={`${cloudinaryUrlPrefix}/v1692732142/assets/iNat_jwwhh4.png`}
                  alt="iNaturalist logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
