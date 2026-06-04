"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/typography/Typography"
import { Mail } from "lucide-react"

interface BlogNewsletterCTAProps {
  title: string
  subtitle: string
  disclaimer: string
  subscribeLabel: string
}

export function BlogNewsletterCTA({ title, subtitle, disclaimer, subscribeLabel }: BlogNewsletterCTAProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 md:p-12 border border-border/50">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Icon */}
        <div className="shrink-0">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <Typography variant="h4" className="mb-2">
            {title}
          </Typography>
          <Typography variant="muted" className="leading-relaxed">
            {subtitle}
          </Typography>
        </div>

        {/* Form */}
        <div className="w-full md:w-auto shrink-0">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl bg-white dark:bg-slate-950 border-border/50 min-w-[200px]"
              id="blog-newsletter-email"
            />
            <Button
              type="submit"
              className="rounded-xl px-6 shrink-0"
              id="blog-newsletter-submit"
            >
              {subscribeLabel}
            </Button>
          </form>
          <Typography variant="caption" className="mt-2 block text-center md:text-left">
            {disclaimer}
          </Typography>
        </div>
      </div>
    </div>
  )
}
