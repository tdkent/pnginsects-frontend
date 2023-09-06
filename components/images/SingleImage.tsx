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
    imgs,
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

  // is true if img is last of odd-numbered group
  const isLastImg = idx === imgs.length - 1 && imgs.length % 2 === 1

  return (
    <>
      {isOpen && <Modal handleClick={handleClick} {...props} />}
      <figure
        onClick={() => handleClick(true)}
        className={`${
          isLastImg ? "sm:basis-full" : "sm:basis-1/2"
        } my-0 shrink basis-full sm:my-0 sm:p-1`}
      >
        <div className="relative mb-4 pb-4 sm:mb-2">
          <div className="relative aspect-[3/2] w-full border border-neutral-300">
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
