import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import type { CMSUser } from "@/types/auth"

// UI State
interface UIState {
  sidebarOpen: boolean
  activeSection: string
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveSection: (id: string) => void
}

// Auth State
interface AuthState {
  user: CMSUser | null
  setUser: (user: CMSUser | null) => void
}

// CMS State
interface CMSState {
  selectedLocale: "en" | "si"
  dirtyForms: Record<string, boolean>
  setSelectedLocale: (locale: "en" | "si") => void
  markDirty: (formId: string) => void
  clearDirty: (formId: string) => void
}

// Combined store type
interface AppStore extends UIState, AuthState, CMSState {}

export const useAppStore = create<AppStore>()(
  devtools(
    immer((set) => ({
      // UI State
      sidebarOpen: true,
      activeSection: "hero",
      toggleSidebar: () =>
        set((state) => {
          state.sidebarOpen = !state.sidebarOpen
        }),
      setSidebarOpen: (open) =>
        set((state) => {
          state.sidebarOpen = open
        }),
      setActiveSection: (id) =>
        set((state) => {
          state.activeSection = id
        }),

      // Auth State
      user: null,
      setUser: (user) =>
        set((state) => {
          state.user = user
        }),

      // CMS State
      selectedLocale: "en",
      dirtyForms: {},
      setSelectedLocale: (locale) =>
        set((state) => {
          state.selectedLocale = locale
        }),
      markDirty: (formId) =>
        set((state) => {
          state.dirtyForms[formId] = true
        }),
      clearDirty: (formId) =>
        set((state) => {
          delete state.dirtyForms[formId]
        }),
    })),
    { name: "mickiesoft-store" }
  )
)
