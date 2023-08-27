import { createContext } from "react"

interface ImageContextInt {
  sections: () => void
}

const ImageContext = createContext<ImageContextInt>({
  sections: () => {},
})

export default ImageContext
