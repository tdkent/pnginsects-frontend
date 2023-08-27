import { CloudinaryResources } from "@/utils/models"
import SingleImage from "./SingleImage"
import { getImages } from "@/utils/fetch.tsx"

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
        return (
          <section id={`${sectionName}`} key={i}>
            <h2>{sectionName}</h2>
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
