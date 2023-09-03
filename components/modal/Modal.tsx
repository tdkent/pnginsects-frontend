import { useState, useEffect, useMemo } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline"

import Backdrop from "./Backdrop"
import { Resource } from "@/utils/models"

interface Props {
  idx: number
  img: Resource
  imgs: Resource[]
  sectionName: string
  // eslint-disable-next-line no-unused-vars
  handleClick: (value: boolean) => void
}

function ModalContent(props: Props) {
  const { idx, imgs, sectionName, handleClick } = props

  const imgUrls = useMemo(() => imgs.map((img) => img.secure_url), [imgs])
  const imgCaptions = useMemo(
    () => imgs.map((img) => (img.caption ? img.caption : "")),
    [imgs]
  )

  const [currentImg, setCurrentImg] = useState(imgUrls[idx])
  const [currentIdx, setCurrentIdx] = useState(idx)
  const [currentCaption, setCurrentCaption] = useState("")

  useEffect(() => {
    setCurrentImg(imgUrls[currentIdx])
    setCurrentCaption(imgCaptions[currentIdx])
  }, [currentIdx, imgUrls, imgCaptions])

  const handleLeftClick = () => {
    setCurrentIdx((prev) => prev - 1)
  }
  const handleRightClick = () => {
    setCurrentIdx((prev) => prev + 1)
  }

  const content = (
    <div className="fixed left-0 top-1/2 z-50 flex w-screen -translate-y-[calc(50%+3rem)] flex-col gap-y-4">
      <div
        className="mr-[10%] flex justify-end"
        onClick={() => handleClick(false)}
      >
        <XCircleIcon className="h-8 w-8 text-neutral-50" />
      </div>
      <div className="flex flex-wrap items-center">
        <div className="basis-[10%]">
          {currentIdx && (
            <ChevronLeftIcon
              className="h-8 w-8 text-neutral-50"
              onClick={handleLeftClick}
            />
          )}
        </div>
        <div className="relative flex aspect-[3/2] basis-[80%] flex-col">
          <Image
            src={currentImg}
            alt={sectionName}
            fill
            className="object-cover"
            quality={10}
          />
        </div>
        <div className="basis-[10%]">
          {currentIdx !== imgUrls.length - 1 && (
            <ChevronRightIcon
              className="h-8 w-8 text-neutral-50"
              onClick={handleRightClick}
            />
          )}
        </div>
        <div className="mt-4 h-7 basis-full px-8 text-center font-light text-primary-50">
          {currentCaption}
        </div>
      </div>
    </div>
  )
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement
  )
}

export default function Modal(props: Props) {
  return (
    <>
      <Backdrop handleClick={props.handleClick} />
      <ModalContent {...props} />
    </>
  )
}
