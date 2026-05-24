import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Mickiesoft — Outsource Software Development",
    template: "%s | Mickiesoft",
  },
  description:
    "Software development outsourcing partner. Mobile apps, web development, Microsoft add-ins, and ERP solutions.",
  keywords: [
    "software development",
    "outsourcing",
    "web development",
    "mobile apps",
    "ERP",
    "Sri Lanka",
    "Mickiesoft",
  ],
  authors: [{ name: "Mickiesoft (Pvt) Ltd" }],
  openGraph: {
    type: "website",
    siteName: "Mickiesoft",
    title: "Mickiesoft — Outsource Software Development",
    description:
      "Software development outsourcing partner. Mobile apps, web development, Microsoft add-ins, and ERP solutions.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
