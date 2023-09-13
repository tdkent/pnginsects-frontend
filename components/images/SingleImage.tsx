"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import Modal from "../modal/Modal"
import photoIcon from "../../public/photo.svg"

interface Props {
  idx: number
  img: Resource
  imgs: Resource[]
  sectionName: string
}

export default function SingleImage(props: Props) {
  const {
    idx,
    img: { secure_url, caption },
    sectionName,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  // body scroll lock
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null)
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => setWrapper(document.getElementById("wrapper")), [])
  const handleClick = (value: boolean) => {
    setIsOpen(value)
    value && setScrollTop(window.scrollY)
    value
      ? wrapper!.classList.add("scroll-lock")
      : wrapper!.classList.remove("scroll-lock")
  }
  useEffect(() => {
    wrapper && isOpen
      ? wrapper.scroll(0, scrollTop)
      : window.scrollTo(0, scrollTop)
  })
  // caption innerHTML
  const createMarkup = () => {
    return { __html: caption }
  }

  return (
    <>
      {isOpen && <Modal handleClick={handleClick} {...props} />}
      <figure
        className={`my-0 grow basis-full sm:my-0 sm:basis-1/2 sm:p-1 xl:basis-1/3 ${
          sectionName === "Tiles" && "lg:basis-1/3"
        }`}
      >
        <div className="relative mb-4 pb-4 sm:mb-2 md:mb-4">
          <div
            onClick={() => handleClick(true)}
            style={{ backgroundImage: `url(${photoIcon.src})` }}
            className="relative aspect-[3/2] w-full border border-neutral-300 bg-[length:12.5%] bg-center bg-no-repeat hover:cursor-pointer dark:border-neutral-800"
          >
            <Image
              src={secure_url}
              alt={`${sectionName} ${idx + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 70vw, 725px"
              className="object-cover"
              quality={25}
            />
          </div>
          {caption && (
            <figcaption
              className="absolute ml-1 mt-0.5 text-sm xl:text-xs"
              dangerouslySetInnerHTML={createMarkup()}
            />
          )}
        </div>
      </figure>
    </>
  )
}
