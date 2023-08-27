"use client"
import Link from "next/link"

interface Props {
  sections: string[]
}

export default function PageIndex({ sections }: Props) {
  return (
    <aside className="w-1/5">
      <div>On this page</div>
      <nav>
        <ul>
          {sections.map((section, i) => {
            return <li key={i}>{section}</li>
          })}
        </ul>
      </nav>
    </aside>
  )
}
