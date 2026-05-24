"use client"

import { motion } from "framer-motion"

// Placeholder client logos — in production these come from API
const CLIENTS = [
  { id: "1", name: "TechCorp", initials: "TC" },
  { id: "2", name: "InnoVate", initials: "IV" },
  { id: "3", name: "DataFlow", initials: "DF" },
  { id: "4", name: "CloudNex", initials: "CN" },
  { id: "5", name: "SyncPro", initials: "SP" },
]

export function Clients() {
  // Double the array for infinite scroll effect
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section id="clients" className="py-12 section-light overflow-hidden">
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        {/* Marquee track */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-36 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {client.initials}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
