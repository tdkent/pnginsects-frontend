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
      <figure onClick={() => handleClick(true)} className="my-5 basis-full">
        <div className="relative aspect-[3/2] w-full border border-neutral-400">
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
          <figcaption className="-mb-3 pt-1 text-sm">{caption}</figcaption>
        )}
      </figure>
    </>
  )
}
