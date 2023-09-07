import { CloudinaryResources } from "@/utils/models"
import SingleImage from "./SingleImage"
import { getImages } from "@/utils/funcs"

interface Props {
  name: string
}

export default async function ImageGallery({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { resources }: CloudinaryResources = await getImages(endpoint)
  return (
    <div>
      {resources.map(({ sectionName, images }, i) => {
        return (
          <section
            id={sectionName}
            key={i}
            className="mt-12 w-full border-t border-neutral-200 pt-16"
          >
            {sectionName !== "Tiles" && <h3 className="mb-6">{sectionName}</h3>}
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
