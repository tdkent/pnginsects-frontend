import Link from "next/link"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

export default function NotFound() {
  return (
    <div className="mx-auto flex h-[calc(100vh-215px)] flex-col items-center justify-center gap-y-10 text-neutral-500">
      <h2 className="flex items-center gap-x-3 font-sans text-2xl">
        <ExclamationCircleIcon className="h-8 w-8" />
        404: Page Not Found
      </h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="rounded-lg bg-neutral-500 px-3 py-2 text-neutral-50"
      >
        Return Home
      </Link>
    </div>
  )
}
