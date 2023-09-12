import Image, { StaticImageData } from "next/image"

import PageHeaderBoundary from "./PageHeaderBoundary"

interface Props {
  text: string
  altText: string
  src: StaticImageData
}

export default function PageHeader({ text, src, altText }: Props) {
  return (
    <>
      <div className="mb-6 flex items-center">
        <div className="relative h-8 w-8 border border-white dark:rounded-full dark:bg-white max-sm:hidden">
          <Image
            alt={altText}
            src={src}
            fill
            sizes="32px"
            className="object-contain dark:scale-90"
            quality={100}
          />
        </div>
        <h2 className="text-xl leading-8 sm:ml-2 md:mx-3 lg:text-2xl">
          {text}
        </h2>
      </div>
      <PageHeaderBoundary />
    </>
  )
}
