"use client"

import { CMSSidebar } from "@/components/cms/layout/CMSSidebar"
import { CMSTopbar } from "@/components/cms/layout/CMSTopbar"
import { useAppStore } from "@/store"
import { cn } from "@/lib/utils"

export default function CMSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CMSLayoutInner>{children}</CMSLayoutInner>
}

function CMSLayoutInner({ children }: { children: React.ReactNode }) {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)

  return (
    <div className="min-h-screen bg-background">
      <CMSSidebar />
      <div
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-16"
        )}
      >
        <CMSTopbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
