import ReactDOM from "react-dom"

interface Props {
  // eslint-disable-next-line no-unused-vars
  handleClick: (value: boolean) => void
}

export default function Backdrop({ handleClick }: Props) {
  const backdrop = (
    <div
      className="fixed left-0 top-0 z-40 h-screen w-full bg-black/90"
      onClick={() => handleClick(false)}
    ></div>
  )
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop") as HTMLElement
  )
}
