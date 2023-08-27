import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import Backdrop from "./Backdrop"
import { Resource } from "@/utils/models"

interface Props {
  idx: number
  imgUrls: string[]
  img: Resource
  sectionName: string
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

function ModalContent({ idx, imgUrls, img, sectionName, setIsOpen }: Props) {
  const [currentImg, setCurrentImg] = useState<string>(imgUrls[idx])
  const [currentIdx, setCurrentIdx] = useState<number>(idx)

  useEffect(() => {
    setCurrentImg(imgUrls[currentIdx])
  }, [currentIdx, imgUrls])

  const handleLeftClick = () => {
    setCurrentIdx((prev) => prev - 1)
  }
  const handleRightClick = () => {
    setCurrentIdx((prev) => prev + 1)
  }

  const content = (
    <div className="fixed top-0 left-0 z-50 flex flex-col">
      <div onClick={() => setIsOpen(false)}>
        <XMarkIcon className="w-10 h-10 text-white" />
      </div>
      <div className="flex items-center">
        {currentIdx && (
          <div>
            <ChevronLeftIcon
              className="w-12 h-12 text-white"
              onClick={handleLeftClick}
            />
          </div>
        )}
        <div className="relative w-[900px] aspect-[3/2]">
          <Image
            src={currentImg}
            alt={sectionName}
            fill
            className="object-cover"
            quality={10}
          />
        </div>
        {currentIdx !== imgUrls.length - 1 && (
          <div>
            <ChevronRightIcon
              className="w-12 h-12 text-white"
              onClick={handleRightClick}
            />
          </div>
        )}
      </div>
    </div>
  )
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement,
  )
}

export default function Modal(props: Props) {
  return (
    <>
      <Backdrop setIsOpen={props.setIsOpen} />
      <ModalContent {...props} />
    </>
  )
}
