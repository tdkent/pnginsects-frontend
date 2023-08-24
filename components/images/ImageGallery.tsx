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
  const endpoint = name.toLowerCase()
  const { resources }: { resources: CloudinaryResource[] } =
    await getImages(endpoint)
  return (
    <div>
      {resources.map((image) => {
        console.log(image)
        return (
          <div key={image.asset_id} className="relative w-[300px] aspect-[3/2]">
            <Image
              alt={image.public_id}
              src={image.secure_url}
              fill
              className="object-cover"
              quality={10}
            />
          </div>
        )
      })}
    </div>
  )
}
