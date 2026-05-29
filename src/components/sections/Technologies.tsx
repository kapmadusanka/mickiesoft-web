import { getTranslations } from "next-intl/server"
import { Typography } from "@/components/typography/Typography"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import Image from "next/image"

const TECH_ITEMS = [
  { name: "React", image: "/images/technologies/react-logo.png" },
  { name: "Next.js", image: "/images/technologies/nextjs-logo.png" },
  { name: "Node.js", image: "/images/technologies/node-js-logo.png" },
  { name: ".NET", image: "/images/technologies/microsoft-net-logo.png" },
  { name: "Angular", image: "/images/technologies/angular-logo.png" },
  { name: "Flutter", image: "/images/technologies/flutter-logo.svg" },
  { name: "Java", image: "/images/technologies/java-logo.png" },
  { name: "Kotlin", image: "/images/technologies/kotlin-logo.png" },
  { name: "PHP", image: "/images/technologies/php-logo.png" },
  { name: "Laravel", image: "/images/technologies/laravel-logo.png" },
  { name: "WordPress", image: "/images/technologies/wordpress-logo.png" },
  { name: "MySQL", image: "/images/technologies/mysql-logo.png" },
  { name: "SQL", image: "/images/technologies/sql-logo.png" },
  { name: "MongoDB", image: "/images/technologies/mongodb-logo.svg" },
  { name: "AWS", image: "/images/technologies/aws-logo.png" },
  { name: "Azure", image: "/images/technologies/azure-logo.png" },
]

export async function Technologies() {
  const t = await getTranslations("technologies")

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
                <div className="relative h-14 w-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain"
                  />
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
