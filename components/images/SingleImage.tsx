"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import Modal from "../modal/Modal"

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

  return (
    <>
      {isOpen && <Modal handleClick={handleClick} {...props} />}
      <figure
        className={`my-0 grow basis-full sm:my-0 sm:basis-1/2 sm:p-1 ${
          sectionName === "Tiles" && "lg:basis-1/3"
        }`}
      >
        <div className="relative mb-4 pb-4 sm:mb-2 md:mb-4">
          <div
            onClick={() => handleClick(true)}
            className="relative aspect-[3/2] w-full border border-neutral-300 hover:cursor-pointer"
          >
            <Image
              src={secure_url}
              alt={`${sectionName} ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              quality={10}
            />
          </div>
          {caption && (
            <figcaption className="absolute ml-2 text-sm">{caption}</figcaption>
          )}
        </div>
      </figure>
    </>
  )
}
