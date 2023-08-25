import ReactDOM from "react-dom"

export default function Backdrop() {
  const backdrop = (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"></div>
  )
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop") as HTMLElement,
  )
}
