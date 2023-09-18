"use client"
import { useState, useEffect } from "react"
import { InView } from "react-intersection-observer"

import { Resource } from "@/utils/models"
import SingleImage from "./SingleImage"
import useStore from "@/utils/hooks"

interface Props {
  resources: {
    sectionName: string
    images: Resource[]
  }[]
  count: number
}

export default function ImageGalleryContents({ resources, count }: Props) {
  // set margin for intersection observer
  const [bottomMargin, setBottomMargin] = useState("")
  useEffect(() => {
    const headerSize = 115
    const marginAndPadding = 48 + 64
    setBottomMargin(`${headerSize - window.innerHeight + marginAndPadding}px`)
  }, [])
  useEffect(() => {
    if (count) console.log("count ", count)
  }, [count])
  const changeVisibility = useStore((state) => state.changeSectionVisibility)
  return (
    <div>
      {resources &&
        resources.map(({ sectionName, images }, i) => {
          return (
            <section
              key={i}
              id={sectionName}
              className={`mt-12 w-full ${
                sectionName !== "Tiles" && "border-t"
              } border-neutral-200 pt-16 dark:border-neutral-800 lg:mt-0 lg:pt-32`}
            >
              <InView
                as="div"
                id={sectionName}
                rootMargin={`0px 0px ${bottomMargin} 0px`}
                onChange={(inView, entry) =>
                  inView && changeVisibility(entry.target.id)
                }
              />
              {sectionName !== "Tiles" && (
                <h3 className="mb-6">{sectionName}</h3>
              )}
              <div className="flex flex-wrap">
                {images.map((img, i, arr) => {
                  return (
                    <SingleImage
                      key={i}
                      idx={i}
                      img={img}
                      imgs={arr}
                      sectionName={sectionName}
                    />
                  )
                })}
              </div>
            </section>
          )
        })}
    </div>
  )
}
