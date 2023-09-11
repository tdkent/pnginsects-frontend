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

  // caption innerHTML
  const createMarkup = () => {
    return { __html: currentCaption }
  }

  const content = (
    <div className="fixed left-0 top-1/2 z-50 mx-auto flex w-screen max-w-[1280px] -translate-y-[calc(50%+3rem)] flex-col gap-y-4 xl:left-1/2 xl:-translate-x-[calc(50%)] xl:-translate-y-[calc(50%+2rem)]">
      <div className="mx-auto flex w-[80%] justify-end sm:w-[84%]">
        <div
          onClick={() => handleClick(false)}
          className="w-fit hover:cursor-pointer"
        >
          <XCircleIcon className="h-8 w-8 text-neutral-50 sm:h-12 sm:w-12" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex basis-[10%] justify-center sm:basis-[8%]">
          {currentIdx && (
            <ChevronLeftIcon
              className="h-8 w-8 text-neutral-50 hover:cursor-pointer sm:h-12 sm:w-12"
              onClick={handleLeftClick}
            />
          )}
        </div>
        <div className="relative flex aspect-[3/2] basis-[80%] flex-col sm:basis-[84%]">
          <Image
            src={currentImg}
            alt={sectionName}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1280px) 84vw, 735px"
            className="object-cover"
            quality={50}
          />
        </div>
        <div className="flex basis-[10%] justify-center sm:basis-[8%]">
          {currentIdx !== imgUrls.length - 1 && (
            <ChevronRightIcon
              className="h-8 w-8 text-neutral-50 hover:cursor-pointer sm:h-12 sm:w-12"
              onClick={handleRightClick}
            />
          )}
        </div>
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className="mt-4 h-7 basis-full px-8 text-center font-light text-primary-50"
        />
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
