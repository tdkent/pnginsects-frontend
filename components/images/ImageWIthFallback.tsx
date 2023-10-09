import { useState, useEffect } from "react"
import Image from "next/image"

import { Resource } from "@/utils/models"
import fallbackImage from "../../public/fallback-sm.jpg"

interface Props {
  idx: number
  sectionName: string
  img: Resource
}

export default function ImageWIthFallback(props: Props) {
  const {
    idx,
    sectionName,
    img: { secure_url },
  } = props
  const [error, setError] = useState(false)
  useEffect(() => {
    setError(false)
  }, [secure_url])
  return (
    <Image
      src={error ? fallbackImage : secure_url}
      alt={`${sectionName} ${idx + 1}`}
      fill
      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 70vw, (max-width: 1440px) 75vw, 1050px"
      className="object-cover"
      quality={25}
      onError={() => setError(true)}
    />
  )
}
