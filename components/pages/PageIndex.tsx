import Link from "next/link"

import { getImages, shortenSectionName } from "@/utils/funcs"
import { CloudinaryResources } from "@/utils/models"

interface Props {
  name: string
}

export default async function PageIndex({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { sections }: CloudinaryResources = await getImages(endpoint)
  return (
    <aside className="w-1/5">
      <div>On this page</div>
      <nav>
        <ul>
          {sections.map((section, i) => {
            const shortSection = shortenSectionName(section)
            return (
              <li key={i}>
                <Link href={`#${shortSection}`}>{shortSection}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
