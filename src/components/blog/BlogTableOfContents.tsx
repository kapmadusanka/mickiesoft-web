"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"

interface TocItem {
  id: string
  text: string
  level: number
}

interface BlogTableOfContentsProps {
  content: string
  title: string
}

export function BlogTableOfContents({ content, title }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState("")
  const [headings, setHeadings] = useState<TocItem[]>([])

  // Parse headings from HTML content
  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const elements = doc.querySelectorAll("h2[id], h3[id]")
    const items: TocItem[] = []

    elements.forEach((el) => {
      items.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      })
    })

    setHeadings(items)
  }, [content])

  // Observe heading elements for active state
  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <div className="flex items-center gap-2 mb-4">
        <List className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{title}</span>
      </div>
      <ol className="space-y-1 text-sm">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(heading.id)
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                  setActiveId(heading.id)
                }
              }}
              className={cn(
                "block py-1.5 border-l-2 transition-all duration-200",
                heading.level === 3 ? "pl-6" : "pl-3",
                activeId === heading.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
