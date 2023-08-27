import { FilteredCloudinaryResources } from "@/utils/models"
import { backendUrl } from "@/utils/lib/constants"
import SingleImage from "./SingleImage"

interface Props {
  name: string
}

const getImages = async (endpoint: string) => {
  const response = await fetch(`${backendUrl}/${endpoint}`)
  return response.json()
}

export default async function ImageGallery({ name }: Props) {
  // fetch image data
  const endpoint = name.toLowerCase()
  const resources: FilteredCloudinaryResources[] = await getImages(endpoint)

  return (
    <div>
      {resources.map(({ sectionName, images }, i) => {
        const imgUrls = images.map((img) => img.secure_url)
        return (
          <section key={i}>
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
