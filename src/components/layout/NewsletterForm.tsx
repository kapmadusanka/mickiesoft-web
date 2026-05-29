"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewsletterForm() {
  return (
    <form className="relative group" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full pl-4 pr-12 py-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl focus-visible:ring-blue-500"
      />
      <Button
        type="submit"
        size="icon"
        className="absolute right-1.5 top-1.5 bottom-1.5 h-auto w-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all"
      >
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  )
}
