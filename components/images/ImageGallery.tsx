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
      {resources.map(({ sectionName, images }) => {
        return (
          <section key={sectionName}>
            <h2>{sectionName}</h2>
            {images.map((image, i) => (
              <SingleImage
                key={image.asset_id}
                sectionName={sectionName}
                image={image}
                i={i}
              />
            ))}
          </section>
        )
      })}
    </div>
  )
}
