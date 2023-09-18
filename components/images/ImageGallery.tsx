import { CloudinaryResources } from "@/utils/models"
import { getImages } from "@/utils/funcs"
import ImageGalleryContents from "./ImageGalleryContents"

interface Props {
  name: string
}

export default async function ImageGallery({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { resources }: CloudinaryResources = await getImages(endpoint)
  const numberOfResources = resources.reduce(
    (acc, curr) => acc + curr.images.length,
    0
  )
  console.log("numberOfResources ", numberOfResources)
  return <ImageGalleryContents resources={resources} />
}
