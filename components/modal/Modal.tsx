import ReactDOM from "react-dom"
import Image from "next/image"

import Backdrop from "./Backdrop"

export default function Modal() {
  const modal = (
    <>
      <Backdrop />
      <div>Modal</div>
    </>
  )
  return ReactDOM.createPortal(
    modal,
    document.getElementById("modal") as HTMLElement,
  )
}
