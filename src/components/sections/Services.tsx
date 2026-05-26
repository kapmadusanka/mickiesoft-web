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
  {
    key: "fixedBudget",
    icon: DollarSign,
    reversed: false,
    visualBg: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30",
    ringBorder: "border-emerald-300 dark:border-emerald-700",
    ringBorderOuter: "border-emerald-200 dark:border-emerald-800",
    iconBg: "bg-emerald-500",
    tagBg: "bg-emerald-100 dark:bg-emerald-950/60",
    tagText: "text-emerald-800 dark:text-emerald-300",
  },
  {
    key: "hireProfessionals",
    icon: UserCheck,
    reversed: true,
    visualBg: "bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/50 dark:to-sky-900/30",
    ringBorder: "border-sky-300 dark:border-sky-700",
    ringBorderOuter: "border-sky-200 dark:border-sky-800",
    iconBg: "bg-sky-500",
    tagBg: "bg-sky-100 dark:bg-sky-950/60",
    tagText: "text-sky-800 dark:text-sky-300",
  },
  {
    key: "hireTeam",
    icon: UsersRound,
    reversed: false,
    visualBg: "bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/50 dark:to-violet-900/30",
    ringBorder: "border-violet-300 dark:border-violet-700",
    ringBorderOuter: "border-violet-200 dark:border-violet-800",
    iconBg: "bg-violet-500",
    tagBg: "bg-violet-100 dark:bg-violet-950/60",
    tagText: "text-violet-800 dark:text-violet-300",
  },
  {
    key: "itOps",
    icon: Wrench,
    reversed: true,
    visualBg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/30",
    ringBorder: "border-amber-300 dark:border-amber-700",
    ringBorderOuter: "border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-500",
    tagBg: "bg-amber-100 dark:bg-amber-950/60",
    tagText: "text-amber-800 dark:text-amber-300",
  },
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
        <div className="flex flex-col gap-4">
          {FEATURE_ROWS.map((feat, i) => {
            const Icon = feat.icon
            return (
              <AnimatedSection key={feat.key} delay={i * 0.08}>
                <div className="group border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/80 dark:hover:shadow-slate-900/60">
                  <div className={`flex flex-col ${feat.reversed ? "md:flex-row-reverse" : "md:flex-row"} items-stretch`}>

                    {/* Visual side */}
                    <div className={`relative md:w-72 shrink-0 flex items-center justify-center p-10 ${feat.visualBg}`}>
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* spinning dashed rings */}
                        <div className={`absolute inset-[-10px] rounded-full border-2 border-dashed ${feat.ringBorder} opacity-30 animate-[spin_12s_linear_infinite]`} />
                        <div className={`absolute inset-[-22px] rounded-full border border-dashed ${feat.ringBorderOuter} opacity-15 animate-[spin_20s_linear_infinite_reverse]`} />
                        <div className={`w-[76px] h-[76px] rounded-full ${feat.iconBg} flex items-center justify-center shadow-md`}>
                          <Icon className="w-9 h-9 text-white" strokeWidth={1.7} />
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="flex-1 p-8 md:p-10 bg-white dark:bg-slate-950 flex flex-col justify-center">
                      <div className={`inline-flex w-fit text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${feat.tagBg} ${feat.tagText} mb-4`}>
                        {t(`${feat.key}Title`)}
                      </div>

                      <Typography variant="h4" className="mb-3 text-slate-900 dark:text-white leading-tight">
                        {t(`${feat.key}Title`)}
                      </Typography>
                      <Typography variant="p" className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                        {t(`${feat.key}Desc`)}
                      </Typography>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
