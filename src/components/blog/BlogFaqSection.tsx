import { getTranslations } from "next-intl/server"
import { faqsService } from "@/services/api/public"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface BlogFaqSectionProps {
  category: string;
}

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export async function BlogFaqSection({ category }: BlogFaqSectionProps) {
  const t = await getTranslations("faq")

  // 1. Fetch data
  const allFaqs = await faqsService.getBlogFaqs().catch(() => [])

  // 2. Filter FAQs based on category
  const matchedFaqs = allFaqs.filter(faq => !faq.categories || faq.categories.includes(category));

  const faqs = matchedFaqs.length > 5
    ? shuffle(matchedFaqs).slice(0, 5)
    : [
      ...matchedFaqs,
      ...shuffle(allFaqs.filter(faq => !matchedFaqs.includes(faq))).slice(0, 5 - matchedFaqs.length)
    ];

  if (faqs.length === 0) {
    return null;
  }

  // 3. Generate JSON-LD Schema for SEO rich results
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
    <section className="section-light py-16 relative overflow-hidden mt-10 rounded-3xl" id="faqs">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-brand/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-3">
            {t("titleStart")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            {t("subtitle")}
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 animate-fade-up shadow-sm">
          <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full">
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
      </div>
    </section>
  )
}
