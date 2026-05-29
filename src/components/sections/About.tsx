import { getTranslations } from "next-intl/server"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import { Settings, Users, Zap, HeadphonesIcon, ArrowRight } from "lucide-react"
import Image from "next/image"

const ICONS = [Settings, Users, Zap, HeadphonesIcon]
const FEATURES = ["feature1", "feature2", "feature3", "feature4"] as const

export async function About() {
  const t = await getTranslations("about")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: t("heading"),
    description: t("paragraph1"),
  }

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl translate-y-1/3" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <AnimatedSection className="lg:col-span-5">
            <div className="sticky top-24">
              <Typography
                variant="caption"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium mb-6 uppercase tracking-widest text-sm"
              >
                {t("sectionLabel")}
              </Typography>

              <Typography variant="h2" className="text-4xl lg:text-5xl leading-tight mb-6">
                {t("heading")}
              </Typography>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <Typography variant="p">
                  {t("paragraph1")}
                </Typography>
                <Typography variant="p">
                  {t("paragraph2")}
                </Typography>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-2xl font-medium hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Get In Touch
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Feature Cards + Visual */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map((feat, i) => {
                const Icon = ICONS[i]
                return (
                  <StaggerItem key={feat}>
                    <Card className="group h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/20 transition-all duration-500 bg-card/70 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>

                        <Typography variant="h5" className="mb-4 text-xl">
                          {t(`${feat}Title`)}
                        </Typography>

                        <Typography variant="muted" className="text-base leading-relaxed">
                          {t(`${feat}Desc`)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>



          </div>
        </div>
      </div>
    </section>
  )
}