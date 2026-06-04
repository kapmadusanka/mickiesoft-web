"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/store"
import { useScrollSpy } from "@/hooks"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Typography } from "@/components/typography/Typography"
import { Menu } from "lucide-react"

type NavItem = {
  id: string
  labelKey: any
  path?: string
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "services", labelKey: "services" },
  { id: "technologies", labelKey: "technologies" },
  { id: "blog", labelKey: "blog", path: "/blog" },
  { id: "contact", labelKey: "contact" },
]

export function Navbar() {
  const t = useTranslations("nav")
  const activeSection = useAppStore((s) => s.activeSection)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useScrollSpy()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileOpen(false)
    }
  }

  function handleNavClick(e: React.MouseEvent, id: string) {
    if (pathname === "/") {
      e.preventDefault()
      scrollToSection(id)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300  backdrop-blur-md",
        scrolled
          ? "glass shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Typography
            variant="h4"
            as="span"
            className={cn(
              "font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-foreground"
            )}
          >
            Mickiesoft
          </Typography>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path ? (item.path as any) : (pathname === "/" ? `#${item.id}` : `/#${item.id}`)}
              onClick={(e) => {
                if (item.path) {
                  setMobileOpen(false)
                } else {
                  handleNavClick(e, item.id)
                }
              }}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                item.path ? (pathname.startsWith(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")
                  : activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            className="rounded-full px-6"
            size="sm"
            asChild
          >
            <Link
              href={pathname === "/" ? "#about" : "/#about"}
              onClick={(e) => handleNavClick(e, "about")}
            >
              {t("getStarted")}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path ? (item.path as any) : (pathname === "/" ? `#${item.id}` : `/#${item.id}`)}
                    onClick={(e) => {
                      if (item.path) {
                        setMobileOpen(false)
                      } else {
                        handleNavClick(e, item.id)
                      }
                    }}
                    className={cn(
                      "px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors",
                      item.path ? (pathname.startsWith(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")
                        : activeSection === item.id
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
                <Button
                  className="rounded-full mt-4"
                  asChild
                >
                  <Link
                    href={pathname === "/" ? "#about" : "/#about"}
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
