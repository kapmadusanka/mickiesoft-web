import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Clients } from "@/components/sections/Clients"
import { About } from "@/components/sections/About"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { Technologies } from "@/components/sections/Technologies"
import { Contact } from "@/components/sections/Contact"
import { FaqSection } from "@/components/sections/FaqSection"
import CTASection from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <Stats />
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
