import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { SEO_KEYWORDS, SITE_DESCRIPTION } from "@/lib/seo-keywords"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const SITE_URL = "https://mickiesoft.lk"

const businessAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "No 112, Kaldemulla rd",
  addressLocality: "Moratuwa",
  postalCode: "10400",
  addressRegion: "Western Province",
  addressCountry: "LK",
}

const socialProfiles = [
  "https://facebook.com/mickiesoft",
  "https://linkedin.com/company/mickiesoft",
]

// Global Schema.org structured data — Organization, LocalBusiness & Services
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Mickiesoft (Pvt) Ltd",
      alternateName: "Mickiesoft",
      slogan: "Software Development Company Sri Lanka — Hire Developers",
      url: SITE_URL,
      knowsAbout: [
        "Software Development Outsourcing",
        "Offshore Software Development",
        "Hire Developers Sri Lanka",
        "Web Development",
        "Mobile App Development",
        "ERP Solutions",
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
        width: 200,
        height: 60,
      },
      image: `${SITE_URL}/images/og-image.png`,
      description:
        "Software development outsourcing partner based in Sri Lanka. We deliver mobile apps, web development, Microsoft add-ins, and ERP solutions for global clients.",
      address: businessAddress,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94-77-229-6180",
        contactType: "customer service",
        email: "shanuka@mickiesoft.lk",
        availableLanguage: ["English", "Sinhala"],
        areaServed: "Worldwide",
      },
      sameAs: socialProfiles,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          { "@id": `${SITE_URL}/#service-mobile` },
          { "@id": `${SITE_URL}/#service-microsoft` },
          { "@id": `${SITE_URL}/#service-web` },
          { "@id": `${SITE_URL}/#service-erp` },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Mickiesoft (Pvt) Ltd",
      url: SITE_URL,
      telephone: "+94-77-229-6180",
      email: "shanuka@mickiesoft.lk",
      image: `${SITE_URL}/images/og-image.png`,
      logo: `${SITE_URL}/images/logo.png`,
      description:
        "Software development company in Sri Lanka. Hire dedicated developers for offshore outsourcing — web, mobile, Microsoft add-ins, and ERP solutions for global clients.",
      address: businessAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.773,
        longitude: 79.882,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Canada" },
      ],
      sameAs: socialProfiles,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-mobile`,
      name: "Mobile App Development",
      serviceType: "Mobile Application Development",
      description:
        "Native and cross-platform mobile applications built with modern frameworks for iOS and Android.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      url: `${SITE_URL}/#services`,
      category: "Software Development",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-microsoft`,
      name: "Microsoft Add-in Development",
      serviceType: "Microsoft Office Add-in Development",
      description:
        "Custom Microsoft Office add-ins and integrations that enhance your productivity workflow.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      url: `${SITE_URL}/#services`,
      category: "Software Development",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-web`,
      name: "Web Development",
      serviceType: "Custom Web Development",
      description:
        "Full-stack web applications built with modern technologies for performance and scalability.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      url: `${SITE_URL}/#services`,
      category: "Software Development",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-erp`,
      name: "ERP Development",
      serviceType: "Enterprise Resource Planning Development",
      description:
        "Enterprise resource planning solutions customized to streamline your business operations.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      url: `${SITE_URL}/#services`,
      category: "Enterprise Software",
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mickiesoft.lk'),
  title: {
    default: "Software Development Company Sri Lanka | Hire Developers — Mickiesoft",
    template: "%s | Mickiesoft",
  },
  description: SITE_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
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
    title: "Software Development Company Sri Lanka | Hire Developers — Mickiesoft",
    description: SITE_DESCRIPTION,
    locale: "en_LK",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}

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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x34ffk76cq");
          `}
        </Script>
      </body>
    </html>
  )
}
