"use client"
import useStore from "@/utils/hooks"
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"

export default function BackToTop() {
  const isPageHeaderVisible = useStore((state) => state.isPageHeaderVisible)
  return (
    <a
      href="#"
      className={`${
        isPageHeaderVisible ? "opacity-0" : "opacity-100"
      } sticky bottom-6 left-full mb-6 mr-6 flex w-fit items-center justify-end gap-x-2 place-self-end whitespace-nowrap rounded-xl bg-black/60 p-4 text-white transition-opacity duration-300 dark:bg-neutral-500/75 max-lg:hidden`}
    >
      Back to top
      <ArrowUpCircleIcon className="h-4 w-4" />
    </a>
  )
}
