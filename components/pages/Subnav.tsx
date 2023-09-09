import NewSubnavContents from "./SubnavContents"
import { getImages } from "@/utils/funcs"
import { CloudinaryResources } from "@/utils/models"

interface Props {
  name: string
}

export default async function Subnav({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { sections }: CloudinaryResources = await getImages(endpoint)
  return <NewSubnavContents sections={sections} />
}
