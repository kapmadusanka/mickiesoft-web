"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LoadingSpinner } from "./LoadingSpinner"
import React from "react"

export interface ExtendedButtonProps
  extends React.ComponentProps<typeof Button> {
  loading?: boolean
}

export const ExtendedButton = React.forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  ({ loading, className, children, disabled, ...props }, ref) => (
    <Button
      ref={ref}
      disabled={disabled || loading}
      className={cn(loading && "opacity-70 cursor-wait", className)}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <LoadingSpinner size="sm" />
          {children}
        </span>
      ) : (
        children
      )}
    </Button>
  )
)
ExtendedButton.displayName = "ExtendedButton"
