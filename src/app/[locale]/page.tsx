import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { SEO_KEYWORDS, SITE_DESCRIPTION } from "@/lib/seo-keywords"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Clients } from "@/components/sections/Clients"
import { About } from "@/components/sections/About"
import { PromiseSection } from "@/components/sections/PromiseSection"
import { Services } from "@/components/sections/Services"
import { Technologies } from "@/components/sections/Technologies"
import { Contact } from "@/components/sections/Contact"
import { FaqSection } from "@/components/sections/FaqSection"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Software Development Company Sri Lanka | Hire Developers",
  description: SITE_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    title: "Software Development Company Sri Lanka | Hire Developers — Mickiesoft",
    description: SITE_DESCRIPTION,
    url: "https://mickiesoft.lk",
    type: "website",
    locale: "en_LK",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Mickiesoft — Software Development Company Sri Lanka" }],
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <PromiseSection />
        <Services />
        <Technologies />
        <CTASection/>
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
