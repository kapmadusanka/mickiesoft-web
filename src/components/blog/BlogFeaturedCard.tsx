import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/components/typography/Typography"
import type { BlogPostListItem } from "@/types/public"
import { Clock } from "lucide-react"

interface BlogFeaturedCardProps {
  post: BlogPostListItem
  locale: string
  featuredLabel: string
  readTimeLabel: string
}

export function BlogFeaturedCard({ post, locale, featuredLabel, readTimeLabel }: BlogFeaturedCardProps) {
  const href = locale === "en" ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`

  return (
    <Link href={href} className="group block">
      <article className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-[45%] aspect-[16/10] md:aspect-auto overflow-hidden bg-muted shrink-0">
            {post.featuredImage ? (
              <Image src={post.featuredImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">{post.category}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
            {/* Featured badge */}
            <span className="inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {featuredLabel}
            </span>

            {/* Title */}
            <Typography
              variant="h3"
              className="group-hover:text-primary transition-colors duration-200"
            >
              {post.title}
            </Typography>

            {/* Excerpt */}
            <Typography variant="p" className="text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </Typography>

            {/* Author & Meta */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <Typography variant="small" className="text-foreground font-medium">
                  {post.author.name}
                </Typography>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground ml-auto">
                <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime} {readTimeLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
