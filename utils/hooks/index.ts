import { create } from "zustand"

interface VisibilityState {
  isVisible: boolean
  // eslint-disable-next-line no-unused-vars
  changeVisibility: (value: boolean) => void
}

const useStore = create<VisibilityState>()((set) => ({
  isVisible: false,
  changeVisibility: (value) => set(() => ({ isVisible: value })),
}))

export default useStore
