"use client"
import { useState } from "react"
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
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} {...props} />}
      <figure
        onClick={() => setIsOpen((prev) => !prev)}
        className="my-5 basis-full"
      >
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
