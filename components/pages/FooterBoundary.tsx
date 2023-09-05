"use client"
import { InView } from "react-intersection-observer"

import useStore from "@/utils/hooks"

export default function FooterBoundary() {
  const changeVisibility = useStore((state) => state.changeFooterVisibility)
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
