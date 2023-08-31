import Image from "next/image"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import { cloudinaryUrlPrefix } from "@/utils/lib/constants"

const Footer = () => {
  return (
    <footer className="min-h-[80px] items-center justify-center border-t px-5 pb-8 pt-5 text-sm">
      <p className="mb-5">
        Any feedback, especially in relation to identifications, is always
        gratefully received.
      </p>
      <p className="mb-5">
        I welcome the use of my photos, should the appropriate credit naturally
        be given.
      </p>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <EnvelopeIcon className="mt-0.5 h-4 w-4" />
          jtwareing@gmail.com
        </div>
        <div className="relative -mt-1 aspect-[1632/368] w-28">
          <Image
            src={`${cloudinaryUrlPrefix}/v1692732142/assets/iNat_jwwhh4.png`}
            alt="iNaturalist logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
