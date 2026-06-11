import { getTranslations } from "next-intl/server"
import { Typography } from "@/components/typography/Typography"
import { AnimatedSection } from "@/components/shared/PageTransition"
import { ShieldCheck, Clock, CheckCircle, Headset } from "lucide-react"

const PROMISE_DATA = [
  { key: "ip", icon: ShieldCheck },
  { key: "delivery", icon: Clock },
  { key: "warranty", icon: CheckCircle },
  { key: "support", icon: Headset },
] as const

export async function PromiseSection() {
  const t = await getTranslations("promise")

  return (
    <section id="promise" className="py-20 section-light relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-brand/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Typography variant="muted" className="mb-2 font-semibold tracking-wider uppercase text-brand">
              {t("sectionLabel")}
            </Typography>
            <Typography variant="h2" className="mb-6 font-heading font-bold text-3xl md:text-5xl">
              {t("heading")}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROMISE_DATA.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.key}
                  className="glass p-8 rounded-2xl flex flex-col items-start hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-14 w-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
                    <Icon className="h-7 w-7 text-brand group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <Typography variant="h3" className="mb-3 font-semibold text-xl">
                    {t(`${item.key}Title`)}
                  </Typography>
                  <Typography variant="muted" className="leading-relaxed">
                    {t(`${item.key}Desc`)}
                  </Typography>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
