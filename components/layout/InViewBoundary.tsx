"use client"
import { InView } from "react-intersection-observer"

import useStore from "@/utils/hooks"

export default function InViewBoundary() {
  const changeVisibility = useStore((state) => state.changeVisibility)
  return (
    <InView
      as="div"
      rootMargin="60px"
      onChange={(inView) => changeVisibility(inView)}
    >
      <div />
    </InView>
  )
}
