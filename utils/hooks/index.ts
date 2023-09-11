/* eslint-disable no-unused-vars */
import { create } from "zustand"

interface VisibilityState {
  isFooterVisible: boolean
  isPageHeaderVisible: boolean
  currentVisibleSection: string
  changeFooterVisibility: (value: boolean) => void
  changePageHeaderVisibility: (value: boolean) => void
  changeSectionVisibility: (value: string) => void
}

const useStore = create<VisibilityState>()((set) => ({
  isFooterVisible: false,
  isPageHeaderVisible: false,
  currentVisibleSection: "",
  changeFooterVisibility: (value) => set(() => ({ isFooterVisible: value })),
  changePageHeaderVisibility: (value) =>
    set(() => ({ isPageHeaderVisible: value })),
  changeSectionVisibility: (value) =>
    set(() => ({ currentVisibleSection: value })),
}))

export default useStore
