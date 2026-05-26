"use client"

import { useTranslations } from "next-intl"
import { AnimatePresence, motion } from "framer-motion"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Smartphone, Server } from "lucide-react"
import Image from "next/image"
import { PathsBackground } from "@/components/shared/PathsBackground"
import { useState, useEffect } from "react"


const titleContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}



export function Hero() {
  const t = useTranslations()
  const [index, setIndex] = useState(0)

  const heroes = t?.raw("hero") as Array<{
    badge: string
    title: string
    subtitle: string
    cta: string
  }>

  useEffect(() => {
    if (!heroes?.length) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroes.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [heroes?.length])

  if (!heroes?.length) return null

  const current = heroes[index]
  const titleWords = current.title.split(/\s+/)

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center overflow-hidden pt-20"
    >
      <PathsBackground />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="mb-6 h-9 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${index}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Typography
                    variant="caption"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium uppercase tracking-wider"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {current.badge ?? "Software Development Partner"}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title — word by word */}
            <div className="mb-6 min-h-[9rem] sm:min-h-[8rem] lg:min-h-[10rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${index}`}
                  variants={titleContainerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text flex flex-wrap gap-x-3"
                  style={{ perspective: "600px" }}
                >
                  {titleWords.map((word, i) => (
                    <motion.span key={i}  className="inline-block">
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <div className="mb-8 min-h-[5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`subtitle-${index}`}

                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Typography
                    variant="lead"
                    className="max-w-lg text-muted-foreground leading-relaxed"
                  >
                    {current.subtitle}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mb-6">
              {heroes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-8 gap-2 group"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {current.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual — unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-1 animate-float z-10 flex items-center justify-center">
                <Image src="/images/hero-img.png" alt="Hero Image" className="dark:hidden block w-full h-full object-contain" priority width={400} height={400} />
                <Image src="/images/hero-img-white.png" alt="Hero Image" className="hidden dark:block w-full h-full object-contain" priority width={400} height={400} />
              </div>
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20 animate-float" />
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 right-8 glass rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center"><Globe className="h-5 w-5 text-primary" /></div>
                  <div className="flex gap-1"><Typography variant="small" className="font-semibold">Web Apps</Typography><Typography variant="caption">Full Stack</Typography></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 left-4 glass rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center"><Smartphone className="h-5 w-5 text-green-600 dark:text-green-400" /></div>
                  <div className="flex gap-1"><Typography variant="small" className="font-semibold">Mobile</Typography><Typography variant="caption">iOS & Android</Typography></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [3, -7, 3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 right-16 glass rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center"><Server className="h-5 w-5 text-orange-600 dark:text-orange-400" /></div>
                  <div className="flex gap-1"><Typography variant="small" className="font-semibold">ERP</Typography><Typography variant="caption">Enterprise</Typography></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
