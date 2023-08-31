import Link from "next/link"

import PageIndexSelect from "./PageIndexSelect"
import { getImages, shortenSectionName } from "@/utils/funcs"
import { CloudinaryResources } from "@/utils/models"

interface Props {
  name: string
}

export default async function PageIndex({ name }: Props) {
  const endpoint = name.toLowerCase()
  const { sections }: CloudinaryResources = await getImages(endpoint)
  return (
    <aside className="w-full border-y border-neutral-100 px-4 py-3 lg:w-1/5">
      <PageIndexSelect sections={sections} />
      <nav className="max-lg:hidden">
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
