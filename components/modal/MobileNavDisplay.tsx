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
    <div className="mx-auto mt-12 flex w-[95%] justify-between text-neutral-50 lg:hidden">
      <div className="flex basis-1/3 items-center justify-start">
        <button className="hover:cursor-pointer" aria-label="Previous Image">
          {currentIdx ? (
            <ChevronLeftIcon className="h-10 w-10" onClick={handleLeftClick} />
          ) : null}
        </button>
      </div>
      <div className="flex basis-1/3 items-center justify-center">
        <button className="hover:cursor-pointer" aria-label="Next Image">
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
          aria-label="Close"
        >
          <XCircleIcon className="h-10 w-10" />
        </button>
      </div>
    </div>
  )
}
