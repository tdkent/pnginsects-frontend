"use client" // Error components must be Client Components

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

interface Props {
  reset: () => void
  error: Error
}
export default function Error({ error, reset }: Props) {
  return (
    <div className="mx-auto flex h-[calc(100vh-215px)] flex-col items-center justify-center gap-y-10 text-neutral-500">
      <h2 className="flex items-center gap-x-3 font-sans text-2xl">
        <ExclamationTriangleIcon className="h-8 w-8 stroke-[1.5px]" />
        An error occurred
      </h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-neutral-500 px-3 py-2 text-neutral-50"
      >
        Try again
      </button>
    </div>
  )
}
