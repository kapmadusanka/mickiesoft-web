import { getTranslations } from "next-intl/server"
import { faqsService } from "@/services/api/public"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircleQuestion } from "lucide-react"
import Link from "next/link"

export async function FaqSection() {
  const t = await getTranslations("faq")
  // 1. Fetch data with graceful fallback
  const faqs = await faqsService.getAll().catch(() => [])
  console.log("Fetched FAQs:", faqs) // Debug log to verify data structure
  // 2. Generate JSON-LD Schema for SEO rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="section-light py-20 relative overflow-hidden" id="faqs">
      {/* Background decorations for professional SaaS style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        {/* SEO Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {t("titleStart")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>

        {faqs.length > 0 ? (
          <div className="glass rounded-2xl p-6 md:p-8 animate-fade-up shadow-sm">
            {/* Accordion ensures only one item open at a time with type="single" */}
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-base md:text-lg hover:no-underline hover:text-brand transition-colors text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="text-center text-muted-foreground p-8 glass rounded-2xl animate-fade-up">
            {t("noFaqs")}
          </div>
        )}


      </div>
    </section>
  )
}
