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
    <aside className="sticky top-0 z-10 w-full border-y border-primary-700 bg-primary-50/90 py-3 font-semibold text-primary-700 lg:w-1/5">
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
