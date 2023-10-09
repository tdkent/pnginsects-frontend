import { useState, useEffect, useMemo } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline"

import Backdrop from "./Backdrop"
import { Resource } from "@/utils/models"
import photoIcon from "../../public/photo.svg"
import fallbackImage from "../../public/fallback-lg.jpg"

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

  // prevent previous image from showing when loading new image
  const [imgData, setImgData] = useState<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(!!imgData)
  }, [imgData])

  const [currentImg, setCurrentImg] = useState(imgUrls[idx])
  const [currentIdx, setCurrentIdx] = useState(idx)
  const [currentCaption, setCurrentCaption] = useState("")

  useEffect(() => {
    setCurrentImg(imgUrls[currentIdx])
    setCurrentCaption(imgCaptions[currentIdx])
    // refresh image data when new image is selected
    setImgData(null)
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

  // error handling
  const [error, setError] = useState(false)
  useEffect(() => {
    setError(false)
  }, [currentImg])

  const content = (
    <div className="fixed left-0 top-1/2 z-50 mx-auto flex w-screen max-w-[1280px] -translate-y-[calc(50%+3rem)] flex-col gap-y-4 xl:left-1/2 xl:-translate-x-[calc(50%)] xl:-translate-y-[calc(50%+2rem)]">
      <div className="mx-auto flex w-[80%] justify-end sm:w-[84%] xl:w-[calc(65vh*(3/2))]">
        <div
          onClick={() => handleClick(false)}
          className="w-fit hover:cursor-pointer"
        >
          <XCircleIcon className="h-8 w-8 text-neutral-50" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex w-[10%] justify-center sm:w-[8%]">
          {currentIdx && (
            <ChevronLeftIcon
              className="h-8 w-8 text-neutral-50 hover:cursor-pointer sm:h-12 sm:w-12"
              onClick={handleLeftClick}
            />
          )}
        </div>
        <div
          style={{ backgroundImage: `url(${photoIcon.src})` }}
          className="relative flex aspect-[3/2] w-4/5 flex-col border border-neutral-300 bg-[length:12.5%] bg-center bg-no-repeat dark:border-neutral-800 sm:w-[84%] xl:h-[65vh] xl:w-auto"
        >
          <Image
            src={error ? fallbackImage : currentImg}
            alt={sectionName}
            fill
            className={`object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
            quality={50}
            onLoadingComplete={(img) => setImgData(img)}
            onError={() => setError(true)}
          />
        </div>
        <div className="flex w-[10%] justify-center sm:w-[8%]">
          {currentIdx !== imgUrls.length - 1 && (
            <ChevronRightIcon
              className="h-8 w-8 text-neutral-50 hover:cursor-pointer sm:h-12 sm:w-12"
              onClick={handleRightClick}
            />
          )}
        </div>
        <div className="mt-4 flex h-7 w-full items-center justify-center gap-x-4 px-8 text-center font-light text-primary-50">
          <div dangerouslySetInnerHTML={createMarkup()} />
          {isLoaded ? null : (
            <ArrowPathIcon className="h-4 w-4 motion-safe:animate-[spin_2s_linear_infinite]" />
          )}
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
