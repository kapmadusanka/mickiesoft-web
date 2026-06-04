"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import type { BlogPostListItem } from "@/types/public"
import { BlogCard } from "./BlogCard"
import { BlogFeaturedCard } from "./BlogFeaturedCard"

interface BlogSearchProps {
  posts: BlogPostListItem[]
  locale: string
  translations: {
    searchPlaceholder: string
    filterAll: string
    featured: string
    readTimeLabel: string
    noResults: string
  }
}

const CATEGORIES = ["All", "AI", "Web Development", "React", "Next.js", "Cloud", "DevOps", "Mobile"]

export function BlogSearch({ posts, locale, translations }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const featuredPost = posts.find((p) => p.isFeatured)
  const regularPosts = posts.filter((p) => !p.isFeatured)

  const filteredPosts = useMemo(() => {
    let filtered = regularPosts

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.author.name.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [regularPosts, activeCategory, searchQuery])

  // Also check if featured post matches filter
  const showFeatured = useMemo(() => {
    if (!featuredPost) return false
    if (activeCategory !== "All" && featuredPost.category !== activeCategory) return false
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      return (
        featuredPost.title.toLowerCase().includes(query) ||
        featuredPost.excerpt.toLowerCase().includes(query) ||
        featuredPost.category.toLowerCase().includes(query)
      )
    }
    return true
  }, [featuredPost, activeCategory, searchQuery])

  // Get unique categories from actual posts
  const availableCategories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category))
    return CATEGORIES.filter((c) => c === "All" || cats.has(c))
  }, [posts])

  return (
    <>
      {/* Search & Filter Bar */}
      <div className="sticky top-[61px] z-40 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={translations.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full bg-card border-border/50"
            id="blog-search-input"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
              id={`blog-filter-${cat.toLowerCase().replace(/[^a-z]/g, "")}`}
            >
              {cat === "All" ? translations.filterAll : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {showFeatured && featuredPost && (
        <div className="mb-10">
          <BlogFeaturedCard
            post={featuredPost}
            locale={locale}
            featuredLabel={translations.featured}
            readTimeLabel={translations.readTimeLabel}
          />
        </div>
      )}

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground glass rounded-2xl mb-12">
          <p className="text-lg">{translations.noResults}</p>
        </div>
      )}
    </>
  )
}
