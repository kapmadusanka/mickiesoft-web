import { getTranslations } from "next-intl/server"
import { Typography } from "@/components/typography/Typography"
import { AnimatedSection } from "@/components/shared/PageTransition"
import { Smile, FolderKanban, Clock, HardHat } from "lucide-react"

const STATS_DATA = [
  { key: "happyClients", value: 232, icon: Smile, suffix: "+" },
  { key: "projects", value: 521, icon: FolderKanban, suffix: "" },
  { key: "hoursOfSupport", value: 1453, icon: Clock, suffix: "" },
  { key: "hardWorkers", value: 32, icon: HardHat, suffix: "" },
] as const

export async function Stats() {
  const t = await getTranslations("stats")

  return (
    <section id="stats" className="py-16 section-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS_DATA.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.key}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <Typography variant="h2" className="mb-1 tabular-nums gradient-text">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </Typography>
                  <Typography variant="muted">{t(stat.key)}</Typography>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
