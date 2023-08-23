import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function MobileNavSelect({ isOpen, setIsOpen }: Props) {
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <div>
      {isOpen ? (
        <XMarkIcon className='w-8 h-8 text-black' onClick={handleClick} />
      ) : (
        <Bars3Icon className='w-8 h-8 text-black' onClick={handleClick} />
      )}
    </div>
  );
}
