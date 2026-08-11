import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { blogService } from "@/services/api/public"
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents"
import { BlogShareButtons } from "@/components/blog/BlogShareButtons"
import { BlogCard } from "@/components/blog/BlogCard"
import { BlogNewsletterCTA } from "@/components/blog/BlogNewsletterCTA"
import { BlogSidebarNewsletter } from "@/components/blog/BlogSidebarNewsletter"
import { BlogFaqSection } from "@/components/blog/BlogFaqSection"
import { Typography } from "@/components/typography/Typography"
import { ArrowLeft, Calendar, Clock, RefreshCw, ChevronRight } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await blogService.getBySlug(slug)
    return {
      title: post.title,
      description: post.metaDescription,
      keywords: post.tags,
      openGraph: {
        title: `${post.title} | Mickiesoft Blog`,
        description: post.metaDescription,
        type: "article",
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        authors: [post.author.name],
        tags: post.tags,
        url: `/blog/${slug}`,
        ...(post.featuredImage
          ? { images: [{ url: post.featuredImage, alt: post.title }] }
          : {}),
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    }
  } catch {
    return {
      title: "Blog Post Not Found",
    }
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations("blog")

  // Fetch the blog post detail
  let post
  try {
    post = await blogService.getBySlug(slug)
  } catch {
    notFound()
  }

  if (!post) notFound()

  // Fetch all posts for related articles
  const allPosts = await blogService.getAll().catch(() => [])
  const relatedPosts = allPosts.filter((p) => post.relatedSlugs.includes(p.slug)).slice(0, 3)

  // Find prev/next posts for navigation
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`

  // JSON-LD Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Mickiesoft (Pvt) Ltd",
      url: "https://mickiesoft.lk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mickiesoft.lk/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="sticky top-[61px] z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 max-w-7xl py-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link
                href={locale === "en" ? "/" : `/${locale}`}
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href={blogHref}
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-medium">{post.category}</span>
            </nav>
          </div>
        </div>

        {/* Article Layout */}
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex gap-10">
            {/* Left Sidebar — ToC (Desktop) */}
            <aside className="hidden xl:block w-56 shrink-0">
              <BlogTableOfContents content={post.content} title={t("tableOfContents")} />
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              {/* Article Header */}
              <header className="mb-8">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>

                <Typography variant="h1" className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight mb-6">
                  {post.title}
                </Typography>

                {/* Author & Date Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-foreground font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {post.updatedAt && post.updatedAt !== post.publishedAt && (
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>
                        Updated{" "}
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {post.readTime} {t("minRead")}
                    </span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted mb-10">
                {post.featuredImage ? (
                  <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center">
                    <span className="text-7xl font-bold text-primary/15">{post.category}</span>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div
                className="blog-content prose prose-slate dark:prose-invert max-w-none
                  prose-headings:scroll-mt-24 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:leading-relaxed prose-p:text-muted-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:border prose-pre:border-border/20
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:marker:text-primary/60"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />

              {/* CTA Block (if available) */}
              {post.cta && (
                <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                  <Typography variant="h5" className="mb-2">
                    {post.cta.title}
                  </Typography>
                  <Typography variant="muted" className="mb-4">
                    {post.cta.description}
                  </Typography>
                  <a
                    href={post.cta.buttonUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    {post.cta.buttonText}
                  </a>
                </div>
              )}

              {/* Tags */}
              <BlogFaqSection category={post.category} />

              {post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-border/50">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-foreground mr-1">
                      {t("tags")}:
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Prev / Next Navigation */}
              <div className="mt-10 pt-6 border-t border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={locale === "en" ? `/blog/${prevPost.slug}` : `/${locale}/blog/${prevPost.slug}`}
                      className="group flex flex-col gap-1 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all"
                    >
                      <span className="text-xs text-muted-foreground">
                        ← {t("previousArticle")}
                      </span>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                        {prevPost.title}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost && (
                    <Link
                      href={locale === "en" ? `/blog/${nextPost.slug}` : `/${locale}/blog/${nextPost.slug}`}
                      className="group flex flex-col gap-1 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all text-right"
                    >
                      <span className="text-xs text-muted-foreground">
                        {t("nextArticle")} →
                      </span>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                        {nextPost.title}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xl font-bold text-primary mx-auto mb-3">
                    {post.author.name.charAt(0)}
                  </div>
                  <Typography variant="h6" className="mb-1">
                    {post.author.name}
                  </Typography>
                  <Typography variant="caption" className="text-primary mb-3 block">
                    {post.author.role}
                  </Typography>
                  {post.author.bio && (
                    <Typography variant="muted" className="text-xs leading-relaxed mb-4">
                      {post.author.bio}
                    </Typography>
                  )}
                  {post.author.socials && (
                    <div className="flex items-center justify-center gap-3">
                      {post.author.socials.linkedin && (
                        <a
                          href={post.author.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {post.author.socials.twitter && (
                        <a
                          href={post.author.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                      {post.author.socials.github && (
                        <a
                          href={post.author.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Share Buttons */}
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <BlogShareButtons
                    title={post.title}
                    shareLabel={t("shareArticle")}
                    copyLinkLabel={t("copyLink")}
                    linkCopiedLabel={t("linkCopied")}
                  />
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                  <div className="rounded-2xl border border-border/50 bg-card p-6">
                    <h3 className="text-sm font-semibold mb-4">{t("relatedArticles")}</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link
                          key={rp.id}
                          href={locale === "en" ? `/blog/${rp.slug}` : `/${locale}/blog/${rp.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="w-16 h-12 rounded-lg bg-muted shrink-0 flex items-center justify-center overflow-hidden relative">
                              {rp.featuredImage ? (
                                <Image src={rp.featuredImage} alt={rp.title} fill className="object-cover" />
                              ) : (
                                <span className="text-[10px] font-bold text-primary/40">
                                  {rp.category}
                                </span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <Typography
                                variant="small"
                                className="line-clamp-2 group-hover:text-primary transition-colors font-medium"
                              >
                                {rp.title}
                              </Typography>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                <span>
                                  {new Date(rp.publishedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                                <span>·</span>
                                <span>{rp.readTime} {t("minRead")}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={blogHref}
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4 hover:underline"
                    >
                      {t("viewAllArticles")} →
                    </Link>
                  </div>
                )}

                {/* Sidebar Newsletter */}
                <BlogSidebarNewsletter
                  title={t("stayUpdatedTitle")}
                  subtitle={t("stayUpdatedSubtitle")}
                  disclaimer={t("stayUpdatedDisclaimer")}
                  subscribeLabel={t("subscribe")}
                />
              </div>
            </aside>
          </div>
        </div>

        {/* You Might Also Like */}
        {relatedPosts.length > 0 && (
          <section className="py-16 section-light">
            <div className="container mx-auto px-4 max-w-7xl">
              <Typography variant="h3" className="text-center mb-10">
                {t("youMightAlsoLike")}
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <BlogCard key={rp.id} post={rp} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
