"use client"
import { InView } from "react-intersection-observer"

import useStore from "@/utils/hooks"

export default function PageHeaderBoundary() {
  const changeVisibility = useStore((state) => state.changePageHeaderVisibility)
  return (
    <InView as="div" onChange={(inView) => changeVisibility(inView)}>
      <div id="page-header-boundary" />
    </InView>
  )
}
