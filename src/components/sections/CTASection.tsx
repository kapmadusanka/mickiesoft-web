import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircleQuestion } from "lucide-react"

export default function CTASection() {
  const t = useTranslations("cta")

  return (
    <section className="h-62.5 flex items-center justify-center bg-linear-to-r from-primary to-primary/25 text-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("title")}
          </h2>
          <p className="text-gray-300 mt-2">
            {t("subtitle")}
          </p>
        </div>

        <Button asChild size="lg" className="rounded-xl w-full sm:w-auto bg-brand text-brand-foreground hover:bg-brand/90 transition-colors">
          <Link href="#contact">
            <MessageCircleQuestion className="w-5 h-5 mr-2" />
            {t("button")}
          </Link>
        </Button>

      </div>
    </section>
  )
}
