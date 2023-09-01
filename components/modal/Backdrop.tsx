import ReactDOM from "react-dom"

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

export default function Backdrop({ setIsOpen }: Props) {
  const backdrop = (
    <div
      className="bg-black/90 fixed left-0 top-0 z-40 h-screen w-full"
      onClick={() => setIsOpen(false)}
    ></div>
  )
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop") as HTMLElement
  )
}
