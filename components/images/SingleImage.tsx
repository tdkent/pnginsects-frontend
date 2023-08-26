"use client"
import { useState } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import Modal from "../modal/Modal"

interface Props {
  sectionName: string
  images: Resource[]
  image: Resource
  i: number
}

export default function SingleImage({
  sectionName,
  images,
  image: { secure_url, width, height },
  i,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const altText = `${sectionName} image #${i + 1}`
  return (
    <>
      {isOpen && (
        <Modal
          imgUrl={secure_url}
          images={images}
          altText={altText}
          setIsOpen={setIsOpen}
          i={i}
        />
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
