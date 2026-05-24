"use client"

import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 rounded-3xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>
        <Typography variant="h2" className="mb-3">
          Something went wrong
        </Typography>
        <Typography variant="muted" className="mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </Typography>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Go Home
          </Button>
          <Button onClick={reset}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
