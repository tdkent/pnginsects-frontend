import Image from "next/image"

import { FilteredCloudinaryResources } from "@/utils/models"
import { backendUrl } from "@/utils/lib/constants"

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
            {images.map(
              ({ asset_id, public_id, width, height, secure_url }, i) => {
                return (
                  <div key={asset_id}>
                    <Image
                      src={secure_url}
                      alt={`${sectionName} image #${i + 1}`}
                      width={300}
                      height={200}
                      quality={10}
                    />
                  </div>
                )
              },
            )}
          </section>
        )
      })}
    </div>
  )
}
