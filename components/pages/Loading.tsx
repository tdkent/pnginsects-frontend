import { ArrowPathIcon } from "@heroicons/react/24/outline"

export default function Loading() {
  return (
    <div className="mt-8 flex h-full items-center gap-x-2 font-extralight italic">
      <ArrowPathIcon className="h-4 w-4 motion-safe:animate-[spin_2s_linear_infinite]" />
      Loading...
    </div>
  )
}
