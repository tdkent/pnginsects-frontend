import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: React.SetStateAction<boolean>) => void
}

export default function MobileNavSelect({ isOpen, setIsOpen }: Props) {
  const handleClick = () => setIsOpen((prev) => !prev)
  return (
    <button className="hover:cursor-pointer lg:hidden" onClick={handleClick}>
      {isOpen ? (
        <XMarkIcon className="h-8 w-8 text-primary-100 dark:text-primary-50" />
      ) : (
        <Bars3Icon className="h-8 w-8 text-primary-100 dark:text-primary-50" />
      )}
    </button>
  )
}
