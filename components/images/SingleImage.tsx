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

  const altText = `${sectionName} image #${i + 1}`
  return (
    <>
      {isOpen && (
        <Modal imgUrl={secure_url} altText={altText} setIsOpen={setIsOpen} />
      )}
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Image
          src={secure_url}
          alt={altText}
          width={300}
          height={200}
          quality={10}
        />
      </div>
    </>
  )
}
