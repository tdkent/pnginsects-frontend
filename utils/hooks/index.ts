import { create } from "zustand"

interface VisibilityState {
  isFooterVisible: boolean
  isPageHeaderVisible: boolean
  changeFooterVisibility: (value: boolean) => void
  changePageHeaderVisibility: (value: boolean) => void
}

const useStore = create<VisibilityState>()((set) => ({
  isFooterVisible: false,
  isPageHeaderVisible: false,
  changeFooterVisibility: (value) => set(() => ({ isFooterVisible: value })),
  changePageHeaderVisibility: (value) =>
    set(() => ({ isPageHeaderVisible: value })),
}))

export default useStore
