import { cache } from "react"

import { backendUrl } from "../lib/constants"

export const getImages = cache(async (endpoint: string) => {
  const response = await fetch(`${backendUrl}/${endpoint}`, {
    next: { revalidate: 1 },
  })
  return response.json()
})
