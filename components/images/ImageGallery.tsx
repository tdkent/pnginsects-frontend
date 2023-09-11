import { CloudinaryResources } from "@/utils/models"
import { getImages } from "@/utils/funcs"
import ImageGalleryContents from "./ImageGalleryContents"

interface Props {
  name: string
}

export default async function ImageGallery({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { resources }: CloudinaryResources = await getImages(endpoint)
  return <ImageGalleryContents resources={resources} />
}
