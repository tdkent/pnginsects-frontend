import ReactDOM from "react-dom"

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

export default function Backdrop({ setIsOpen }: Props) {
  const backdrop = (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"
      onClick={() => setIsOpen(false)}
    ></div>
  )
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop") as HTMLElement,
  )
}
