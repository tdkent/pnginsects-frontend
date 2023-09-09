import Image from "next/image"

import { cloudinaryUrlPrefix } from "@/utils/lib/constants"
import PageHeaderBoundary from "./PageHeaderBoundary"

interface Props {
  alt1: string
  alt2: string
  asset1: string
  asset2: string
  text: string
  width1: string
  width2: string
  height1: string
  height2: string
}

export default function PageHeader({
  alt1,
  alt2,
  asset1,
  asset2,
  text,
  width1,
  width2,
  height1,
  height2,
}: Props) {
  return (
    <>
      <div className="mb-6 flex">
        <div
          className={`relative w-8 aspect-[${width1}/${height1}] max-sm:hidden`}
        >
          <Image
            src={`${cloudinaryUrlPrefix}/${asset1}`}
            alt={alt1}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-xl leading-8 sm:ml-2 md:mx-3 lg:text-2xl">
          {text}
        </h2>
        {/* <div
          className={`relative w-10 aspect-[${width2}/${height2}] max-md:hidden`}
        >
          <Image
            src={`${cloudinaryUrlPrefix}/${asset2}`}
            alt={alt2}
            fill
            className="object-contain"
          />
        </div> */}
      </div>
      <PageHeaderBoundary />
    </>
  )
}
