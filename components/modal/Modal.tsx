import ReactDOM from "react-dom"
import Image from "next/image"

import Backdrop from "./Backdrop"

interface Props {
  imgUrl: string
  altText: string
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

function ModalContent({ imgUrl, altText }: Props) {
  const content = (
    <div className="fixed top-0 left-0 z-50">
      <Image src={imgUrl} alt={altText} width={900} height={600} quality={10} />
    </div>
  )
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement,
  )
}

export default function Modal(props: Props) {
  return (
    <>
      <Backdrop setIsOpen={props.setIsOpen} />
      <ModalContent {...props} />
    </>
  )
}
