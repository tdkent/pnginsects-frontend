import Image from "next/image"

import { CloudinaryResource } from "@/utils/models"
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
  const resources: CloudinaryResource[] = await getImages(endpoint)

  // create array of unique section names
  const folderNames = resources.map((image) => image.folder.split("/")[1])
  const sectionNames: string[] = [...new Set(folderNames)]

  return (
    <div>
      {sectionNames.map((name) => {
        return (
          <section key={name}>
            <h2>{name}</h2>
            {resources.map((resource) => {
              const section = resource.folder.split("/")[1]
              return (
                section === name && (
                  <div key={resource.asset_id}>
                    <Image
                      src={resource.secure_url}
                      alt={section}
                      width={300}
                      height={200}
                      quality={10}
                    />
                  </div>
                )
              )
            })}
          </section>
        )
      })}
    </div>
  )
}
