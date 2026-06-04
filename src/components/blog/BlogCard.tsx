import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/components/typography/Typography"
import type { BlogPostListItem } from "@/types/public"
import { Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: BlogPostListItem
  locale: string
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const href = locale === "en" ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`

  return (
    <Link href={href} className="group block">
      <article className="h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {post.featuredImage ? (
            <Image src={post.featuredImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/30">{post.category}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          {/* Category */}
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {post.category}
          </span>

          {/* Title */}
          <Typography
            variant="h6"
            className="line-clamp-2 group-hover:text-primary transition-colors duration-200"
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          <Typography variant="muted" className="line-clamp-2 leading-relaxed">
            {post.excerpt}
          </Typography>

          {/* Footer */}
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border/50">
            {/* Author avatar placeholder */}
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-bold text-primary">
              {post.author.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <Typography variant="small" className="truncate text-foreground">
                {post.author.name}
              </Typography>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} min
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
