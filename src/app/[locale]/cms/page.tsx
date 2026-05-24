"use client"

import { useTranslations } from "next-intl"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import { FileText, Briefcase, PenLine, Image } from "lucide-react"

const DASHBOARD_CARDS = [
  { key: "totalPages", icon: FileText, value: "--", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
  { key: "totalServices", icon: Briefcase, value: "--", color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10" },
  { key: "totalBlog", icon: PenLine, value: "--", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10" },
  { key: "totalMedia", icon: Image, value: "--", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10" },
] as const

export default function CMSDashboard() {
  const t = useTranslations("cms.dashboard")

  return (
    <div>
      <AnimatedSection>
        <Typography variant="h2" className="mb-2">
          {t("title")}
        </Typography>
        <Typography variant="muted" className="mb-8">
          {t("welcome")}
        </Typography>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_CARDS.map((card) => {
          const Icon = card.icon
          return (
            <StaggerItem key={card.key}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-xl ${card.bg} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                  </div>
                  <Typography variant="h3" className="mb-1">
                    {card.value}
                  </Typography>
                  <Typography variant="muted">{t(card.key)}</Typography>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
