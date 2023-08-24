// layout
export interface NavLink {
  id: number
  text: string
  root?: boolean
  sublinks?: {
    id: number
    text: string
  }[]
}

export enum NavName {
  blattodea = "Blattodea",
  butterflies = "Butterflies",
  coleoptera = "Coleoptera",
  damselflies = "Damselflies",
  diptera = "Diptera",
  dragonfiles = "Dragonflies",
  hemiptera = "Hemiptera",
  home = "Home",
  hymenoptera = "Hymenoptera",
  lepidoptera = "Lepidoptera",
  mantodea = "Mantodea",
  moths = "Moths",
  odonata = "Odonata",
  orthoptera = "Orthoptera",
  phasmida = "Phasmida",
  trichoptera = "Trichoptera",
}

// cloudinary
export interface CloudinaryResource {
  asset_id: string
  public_id: string
  format: string
  version: number
  resource_type: "upload"
  created_at: string
  bytes: number
  width: number
  height: number
  folder: string
  url: string
  secure_url: string
}
