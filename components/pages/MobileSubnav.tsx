import NewMobileSubnavContents from "./MobileSubnavContents"
import { getImages } from "@/utils/funcs"
import { CloudinaryResources } from "@/utils/models"

interface Props {
  name: string
}

export default async function MobileSubnav({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { sections }: CloudinaryResources = await getImages(endpoint)
  return <NewMobileSubnavContents sections={sections} />
}
