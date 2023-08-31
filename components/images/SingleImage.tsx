"use client"
import { useState } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import Modal from "../modal/Modal"

interface Props {
  idx: number
  imgUrls: string[]
  img: Resource
  sectionName: string
}

export default function SingleImage(props: Props) {
  const {
    idx,
    img: { secure_url, caption },
    sectionName,
  } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} {...props} />}
      <figure onClick={() => setIsOpen((prev) => !prev)} className="my-8">
        <div className="w-100vw relative aspect-[3/2] border border-neutral-500">
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
