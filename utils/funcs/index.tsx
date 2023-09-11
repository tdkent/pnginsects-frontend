import { cache } from "react"

import { backendUrl } from "../lib/constants"

export const getImages = cache(async (endpoint: string) => {
  const response = await fetch(`${backendUrl}/${endpoint}`, {
    next: { revalidate: 60 * 60 * 24 },
  })
  return response.json()
})
