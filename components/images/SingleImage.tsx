"use client"
import { useState } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import Modal from "../modal/Modal"

interface Props {
  sectionName: string
  image: Resource
  i: number
}

export default function SingleImage({
  sectionName,
  image: { secure_url, width, height },
  i,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen && <Modal />}
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Image
          src={secure_url}
          alt={`${sectionName} image #${i + 1}`}
          width={300}
          height={200}
          quality={10}
        />
      </div>
    </>
  )
}
