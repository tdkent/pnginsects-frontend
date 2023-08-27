import Link from "next/link"

import { getImages } from "@/utils/fetch.tsx"
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
            return (
              <li key={i}>
                <Link href={`#${section}`}>{section}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
