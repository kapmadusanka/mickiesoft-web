"use client"

import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/store"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  PenLine,
  Cpu,
  Users,
  Image,
  MessageSquareQuote,
  Settings,
  Languages,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const NAV_ITEMS = [
  { key: "dashboard", href: "/cms", icon: LayoutDashboard },
  { key: "pages", href: "/cms/pages", icon: FileText },
  { key: "services", href: "/cms/services", icon: Briefcase },
  { key: "blog", href: "/cms/blog", icon: PenLine },
  { key: "technologies", href: "/cms/technologies", icon: Cpu },
  { key: "team", href: "/cms/team", icon: Users },
  { key: "media", href: "/cms/media", icon: Image },
  { key: "testimonials", href: "/cms/testimonials", icon: MessageSquareQuote },
] as const

const SETTINGS_ITEMS = [
  { key: "settings", href: "/cms/settings", icon: Settings },
  { key: "translations", href: "/cms/settings/translations", icon: Languages },
] as const

export function CMSSidebar() {
  const t = useTranslations("cms.sidebar")
  const pathname = usePathname()
  const { sidebarOpen, toggleSidebar } = useAppStore()

  function isActive(href: string) {
    // Remove locale prefix for matching
    const cleanPath = pathname.replace(/^\/(en|si)/, "")
    if (href === "/cms") return cleanPath === "/cms" || cleanPath === "/cms/"
    return cleanPath.startsWith(href)
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-40 transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-16"
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {sidebarOpen && (
          <Typography variant="h5" className="gradient-text font-bold">
            Mickiesoft
          </Typography>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                !sidebarOpen && "justify-center px-2"
              )}
              title={!sidebarOpen ? t(item.key) : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{t(item.key)}</span>}
            </Link>
          )
        })}

        <Separator className="my-3" />

        {SETTINGS_ITEMS.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                !sidebarOpen && "justify-center px-2"
              )}
              title={!sidebarOpen ? t(item.key) : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{t(item.key)}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        {sidebarOpen && (
          <Typography variant="caption" className="text-sidebar-foreground/60">
            © Mickiesoft CMS
          </Typography>
        )}
      </div>
    </aside>
  )
}
