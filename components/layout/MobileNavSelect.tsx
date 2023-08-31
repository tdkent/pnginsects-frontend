import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
  isOpen: boolean
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

export default function MobileNavSelect({ isOpen, setIsOpen }: Props) {
  const handleClick = () => setIsOpen((prev) => !prev)
  return (
    <div className="lg:hidden">
      {isOpen ? (
        <XMarkIcon className="text-black h-8 w-8" onClick={handleClick} />
      ) : (
        <Bars3Icon className="text-black h-8 w-8" onClick={handleClick} />
      )}
    </div>
  )
}
