"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      toast.success("Subscribed successfully!", {
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
    } catch (error: any) {
      toast.error("Subscription failed", {
        description: error.message || "Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="relative group" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="w-full pl-4 pr-12 py-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl focus-visible:ring-blue-500"
      />
      <Button
        type="submit"
        size="icon"
        disabled={isLoading || !email}
        className="absolute right-1.5 top-1.5 bottom-1.5 h-auto w-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </Button>
    </form>
  )
}
