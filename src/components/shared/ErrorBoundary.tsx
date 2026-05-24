"use client"

import { Component, type ReactNode } from "react"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <Typography variant="h4" className="mb-2">
            Something went wrong
          </Typography>
          <Typography variant="muted" className="mb-4 max-w-md">
            {this.state.error?.message ?? "An unexpected error occurred while loading this section."}
          </Typography>
          <Button
            variant="outline"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
