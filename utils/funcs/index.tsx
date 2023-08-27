import { cache } from "react"

import { backendUrl } from "../lib/constants"

export const getImages = cache(async (endpoint: string) => {
  const response = await fetch(`${backendUrl}/${endpoint}`)
  return response.json()
})

export const shortenSectionName = (section: string) => {
  if (section.includes(" —")) return section.split(" —")[0]
  if (section.includes(" -")) return section.split(" -")[0]
  return section
}
