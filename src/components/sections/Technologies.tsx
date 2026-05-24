"use client"

import { useTranslations } from "next-intl"
import { Typography } from "@/components/typography/Typography"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"

const TECH_ITEMS = [
  { name: "React", color: "#61DAFB", initials: "Re" },
  { name: "Next.js", color: "#000000", initials: "Nx" },
  { name: "TypeScript", color: "#3178C6", initials: "TS" },
  { name: "Node.js", color: "#339933", initials: "No" },
  { name: ".NET", color: "#512BD4", initials: ".N" },
  { name: "Angular", color: "#DD0031", initials: "Ng" },
  { name: "Flutter", color: "#02569B", initials: "Fl" },
  { name: "Python", color: "#3776AB", initials: "Py" },
  { name: "AWS", color: "#FF9900", initials: "AW" },
  { name: "Azure", color: "#0078D4", initials: "Az" },
  { name: "Docker", color: "#2496ED", initials: "Dk" },
  { name: "PostgreSQL", color: "#4169E1", initials: "Pg" },
]

export function Technologies() {
  const t = useTranslations("technologies")

  return (
    <section id="technologies" className="py-20 lg:py-28 section-light">
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

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {TECH_ITEMS.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.initials}
                </div>
                <Typography variant="small" className="text-center">
                  {tech.name}
                </Typography>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
