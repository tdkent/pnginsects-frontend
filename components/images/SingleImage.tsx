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
    img: { secure_url, caption },
    sectionName,
  } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} {...props} />}
      <figure onClick={() => setIsOpen((prev) => !prev)}>
        <Image
          src={secure_url}
          alt={sectionName}
          width={300}
          height={200}
          quality={10}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </>
  )
}
