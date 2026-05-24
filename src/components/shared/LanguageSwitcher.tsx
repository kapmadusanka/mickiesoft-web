"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const localeLabels: Record<string, string> = {
  en: "English",
  si: "සිංහල",
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: string) {
    // Remove current locale prefix if present
    const segments = pathname.split("/")
    const currentLocaleInPath = segments[1]

    let newPath: string

    if (currentLocaleInPath === "en" || currentLocaleInPath === "si") {
      segments[1] = newLocale === "en" ? "" : newLocale
      newPath = segments.filter(Boolean).join("/")
      newPath = newPath ? `/${newPath}` : "/"
    } else {
      newPath = newLocale === "en" ? pathname : `/${newLocale}${pathname}`
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Switch language">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(localeLabels).map(([key, label]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => switchLocale(key)}
            className={locale === key ? "bg-accent" : ""}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
