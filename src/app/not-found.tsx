import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <SearchX className="h-10 w-10 text-primary" />
        </div>
        <Typography variant="h1" className="mb-2 gradient-text">
          404
        </Typography>
        <Typography variant="h3" className="mb-3">
          Page Not Found
        </Typography>
        <Typography variant="muted" className="mb-8">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button asChild className="rounded-full px-8">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
