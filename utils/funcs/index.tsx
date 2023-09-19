import { cache } from "react"

import { backendUrl } from "../lib/constants"

export const getImages = cache(async (endpoint: string) => {
  const response = await fetch(`${backendUrl}/${endpoint}`, {
    next: { revalidate: 1 },
  })
  if (!response.ok) {
    throw new Error("Failed to fetch image data")
  }
  return response.json()
})
