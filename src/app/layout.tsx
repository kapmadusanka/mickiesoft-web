import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Global Organization Schema for rich search results and AI understanding
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mickiesoft (Pvt) Ltd",
  url: "https://mickiesoft.lk",
  logo: "https://mickiesoft.lk/images/logo.png", // Ensure you have this logo, or update the path
  description: "Software development outsourcing partner. Mobile apps, web development, Microsoft add-ins, and ERP solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 33",
    addressLocality: "Colombo 05",
    addressCountry: "LK"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94 77 123 4567",
    contactType: "customer service",
    email: "info@mickiesoft.lk"
  },
  sameAs: [
    "https://facebook.com/mickiesoft",
    "https://linkedin.com/company/mickiesoft",
    "https://twitter.com/mickiesoft",
    "https://instagram.com/mickiesoft"
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mickiesoft.lk'),
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
  // Essential for AI Citations (Perplexity/Gemini/Claude)
  authors: [{ name: "Mickiesoft", url: "https://mickiesoft.lk" }],
  creator: "Mickiesoft",
  publisher: "Mickiesoft (Pvt) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Mickiesoft",
    title: "Mickiesoft — Outsource Software Development",
    description:
      "Software development outsourcing partner. Mobile apps, web development, Microsoft add-ins, and ERP solutions.",
    url: "https://mickiesoft.lk",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mickiesoft Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mickiesoft",
    creator: "@mickiesoft",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    other: {
      "yandex-verification": "71bb5bedd4b5ecf2",
    },
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
      <body className="min-h-full flex flex-col">
        {children}
        {/* Inject Organization JSON-LD globally */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7GP5GV6ECQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7GP5GV6ECQ');
          `}
        </Script>
      </body>
    </html>
  )
}
