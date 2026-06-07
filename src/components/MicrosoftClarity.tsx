"use client"

import { useEffect } from "react"
import Clarity from "@microsoft/clarity"

export default function MicrosoftClarity() {
  useEffect(() => {
    // Check if we are in a browser environment to safely initialize Clarity
    if (typeof window !== "undefined") {
      Clarity.init("x34ffk76cq")
    }
  }, [])

  return null
}
