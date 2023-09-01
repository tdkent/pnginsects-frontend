import { CloudinaryResources } from "@/utils/models"
import SingleImage from "./SingleImage"
import { getImages, shortenSectionName } from "@/utils/funcs"

interface Props {
  name: string
}

export default async function ImageGallery({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { resources }: CloudinaryResources = await getImages(endpoint)
  return (
    <div>
      {resources.map(({ sectionName, images }, i) => {
        const imgUrls = images.map((img) => img.secure_url)
        const shortSection = shortenSectionName(sectionName)
        return (
          <section
            id={shortSection}
            key={i}
            className="mt-8 border-t border-neutral-200 pt-8"
          >
            {sectionName !== "Tiles" && <h3>{sectionName}</h3>}
            {images.map((img, i) => {
              return (
                <SingleImage
                  key={i}
                  idx={i}
                  imgUrls={imgUrls}
                  img={img}
                  sectionName={sectionName}
                />
              )
            })}
          </section>
        )
      })}
    </div>
  )
}
