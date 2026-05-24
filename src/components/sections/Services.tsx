"use client"

import { useTranslations } from "next-intl"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import {
  Smartphone,
  FileSpreadsheet,
  Globe,
  Server,
  DollarSign,
  UserCheck,
  UsersRound,
  Wrench,
} from "lucide-react"

const SERVICE_CARDS = [
  { key: "mobileDev", icon: Smartphone, color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10" },
  { key: "microsoftAddin", icon: FileSpreadsheet, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
  { key: "webDev", icon: Globe, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10" },
  { key: "erpDev", icon: Server, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10" },
] as const

const FEATURE_ROWS = [
  { key: "fixedBudget", icon: DollarSign, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "hireProfessionals", icon: UserCheck, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10" },
  { key: "hireTeam", icon: UsersRound, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/10" },
  { key: "itOps", icon: Wrench, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
] as const

export function Services() {
  const t = useTranslations("services")

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <Typography
            variant="caption"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium mb-4 uppercase tracking-wider"
          >
            {t("sectionLabel")}
          </Typography>
          <Typography variant="h2" className="mb-4">
            {t("heading")}
          </Typography>
          <Typography variant="lead" className="max-w-2xl mx-auto">
            {t("subtitle")}
          </Typography>
        </AnimatedSection>

        {/* Service Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICE_CARDS.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem key={service.key}>
                <Card className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`h-16 w-16 rounded-2xl ${service.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <Typography variant="h6" className="mb-3">
                      {t(service.key)}
                    </Typography>
                    <Typography variant="muted">
                      {t(`${service.key}Desc`)}
                    </Typography>
                  </CardContent>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Feature Rows */}
        <div className="space-y-8">
          {FEATURE_ROWS.map((feat, i) => {
            const Icon = feat.icon
            const isReversed = i % 2 === 1
            return (
              <AnimatedSection key={feat.key} delay={i * 0.1}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent
                    className={`p-0 flex flex-col ${
                      isReversed ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center`}
                  >
                    {/* Icon Side */}
                    <div
                      className={`w-full md:w-1/3 p-8 flex items-center justify-center ${feat.bg}`}
                    >
                      <div className="h-24 w-24 rounded-3xl bg-card/80 backdrop-blur flex items-center justify-center shadow-lg">
                        <Icon className={`h-12 w-12 ${feat.color}`} />
                      </div>
                    </div>
                    {/* Content Side */}
                    <div className="w-full md:w-2/3 p-8">
                      <Typography variant="h4" className="mb-3">
                        {t(`${feat.key}Title`)}
                      </Typography>
                      <Typography variant="p" className="text-muted-foreground leading-relaxed">
                        {t(`${feat.key}Desc`)}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
