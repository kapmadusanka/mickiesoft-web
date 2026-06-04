"use client"

import { Typography } from "@/components/typography/Typography"

interface BlogSidebarNewsletterProps {
  title: string
  subtitle: string
  disclaimer: string
  subscribeLabel: string
}

export function BlogSidebarNewsletter({ title, subtitle, disclaimer, subscribeLabel }: BlogSidebarNewsletterProps) {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6">
      <div className="text-center">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <Typography variant="h6" className="mb-1">
          {title}
        </Typography>
        <Typography variant="caption" className="text-muted-foreground mb-4 block leading-relaxed">
          {subtitle}
        </Typography>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {subscribeLabel}
          </button>
        </form>
        <Typography variant="caption" className="mt-2 block">
          {disclaimer}
        </Typography>
      </div>
    </div>
  )
}
