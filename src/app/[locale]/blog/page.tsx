import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { blogService } from "@/services/api/public"
import { BlogSearch } from "@/components/blog/BlogSearch"
import { BlogNewsletterCTA } from "@/components/blog/BlogNewsletterCTA"
import { Typography } from "@/components/typography/Typography"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog — Insights & Resources",
    description:
      "Explore our latest articles on software development, emerging technologies, digital transformation, and more.",
    openGraph: {
      title: "Blog — Insights & Resources | Mickiesoft",
      description:
        "Explore our latest articles on software development, emerging technologies, digital transformation, and more.",
      type: "website",
      url: "/blog",
    },
    alternates: {
      canonical: "/blog",
    },
  }
}

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("blog")

  // Fetch blog posts (same pattern as FAQ)
  const posts = await blogService.getAll().catch(() => [])

  // JSON-LD for Blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t("heading"),
    description: t("subtitle"),
    url: "https://mickiesoft.lk/blog",
    publisher: {
      "@type": "Organization",
      name: "Mickiesoft (Pvt) Ltd",
      url: "https://mickiesoft.lk",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      url: `https://mickiesoft.lk/blog/${post.slug}`,
    })),
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog/hero-bg.png"
              alt="Technology and innovation abstract background"
              fill
              className="object-cover opacity-60 dark:opacity-60"
              priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-background/20" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /> */}
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-2xl">
              <Typography
                variant="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up"
              >
                {t("heading")}
              </Typography>
              <Typography
                variant="lead"
                className="text-muted-foreground animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                {t("subtitle")}
              </Typography>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <BlogSearch
              posts={posts}
              locale={locale}
              translations={{
                searchPlaceholder: t("searchPlaceholder"),
                filterAll: t("filterAll"),
                featured: t("featured"),
                readTimeLabel: t("minRead"),
                noResults: t("noResults"),
              }}
            />

            {/* Newsletter CTA */}
            <BlogNewsletterCTA
              title={t("stayUpdatedTitle")}
              subtitle={t("stayUpdatedSubtitle")}
              disclaimer={t("stayUpdatedDisclaimer")}
              subscribeLabel={t("subscribe")}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
