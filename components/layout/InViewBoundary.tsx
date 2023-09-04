"use client"
import { InView } from "react-intersection-observer"

export default function InViewBoundary() {
  return (
    <InView as="div" onChange={(inView, entry) => console.log(inView, entry)}>
      <div />
    </InView>
  )
}
