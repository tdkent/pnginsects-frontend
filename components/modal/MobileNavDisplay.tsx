import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline"

interface Props {
  currentIdx: number
  length: number
  handleLeftClick: () => void
  handleRightClick: () => void
  // eslint-disable-next-line no-unused-vars
  handleClick: (value: boolean) => void
}

export default function MobileNavDisplay({
  currentIdx,
  handleLeftClick,
  handleRightClick,
  handleClick,
  length,
}: Props) {
  return (
    <div className="sticky bottom-4 z-50 mx-auto mt-[calc(100vh-100px)] flex w-[95%] justify-between place-self-end text-neutral-50 lg:hidden">
      <div className="flex basis-1/3 items-center justify-start">
        <button className="hover:cursor-pointer">
          {currentIdx ? (
            <ChevronLeftIcon className="h-10 w-10" onClick={handleLeftClick} />
          ) : null}
        </button>
      </div>
      <div className="flex basis-1/3 items-center justify-center">
        <button className="hover:cursor-pointer">
          {currentIdx !== length - 1 ? (
            <ChevronRightIcon
              className="h-10 w-10"
              onClick={handleRightClick}
            />
          ) : null}
        </button>
      </div>
      <div className="flex basis-1/3 items-center justify-end">
        <button
          onClick={() => handleClick(false)}
          className="hover:cursor-pointer"
        >
          <XCircleIcon className="h-10 w-10" />
        </button>
      </div>
    </div>
  )
}
