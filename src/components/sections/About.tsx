"use client"

import { useTranslations } from "next-intl"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import { Settings, Users, Zap, HeadphonesIcon } from "lucide-react"

const ICONS = [Settings, Users, Zap, HeadphonesIcon]
const FEATURES = ["feature1", "feature2", "feature3", "feature4"] as const

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <Typography
            variant="caption"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium mb-4 uppercase tracking-wider"
          >
            {t("sectionLabel")}
          </Typography>
          <Typography variant="h2" className="mb-4 max-w-2xl mx-auto">
            {t("heading")}
          </Typography>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection>
            <Typography variant="p" className="mb-4 text-muted-foreground leading-relaxed">
              {t("paragraph1")}
            </Typography>
            <Typography variant="p" className="text-muted-foreground leading-relaxed">
              {t("paragraph2")}
            </Typography>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feat, i) => {
              const Icon = ICONS[i]
              return (
                <StaggerItem key={feat}>
                  <Card className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Typography variant="h6" className="mb-2">
                        {t(`${feat}Title`)}
                      </Typography>
                      <Typography variant="muted">
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
    </section>
  )
}
