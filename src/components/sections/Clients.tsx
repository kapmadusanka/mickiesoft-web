"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const CLIENTS = [
  { id: "1", name: "TechCorp", image: "/images/clients/client-1.png" },
  { id: "2", name: "InnoVate", image: "/images/clients/client-2.png" },
  { id: "3", name: "DataFlow", image: "/images/clients/client-3.png" },
  { id: "4", name: "CloudNex", image: "/images/clients/client-4.png" },
  { id: "5", name: "SyncPro", image: "/images/clients/client-5.png" },
]

export function Clients() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  // Triple the array so there's always content visible during the loop reset
  const tripled = [...CLIENTS, ...CLIENTS, ...CLIENTS]

  useEffect(() => {
    if (trackRef.current) {
      // Width of ONE set of clients (1/3 of total track)
      setTrackWidth(trackRef.current.scrollWidth / 3)
    }
  }, [])

  return (
      <section id="clients" className="py-6 section-light overflow-hidden">
        <div className="relative">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <motion.div
              ref={trackRef}
              className="flex gap-6 items-center w-max"
              animate={trackWidth ? { x: [0, -trackWidth] } : false}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
          >
            {tripled.map((client, i) => (
                <div
                    key={`${client.id}-${i}`}
                    className="dark:bg-white shrink-0 flex items-center justify-center h-16 w-36 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="h-16 w-16 rounded-lg flex items-center justify-center text-primary font-bold text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Image
                        src={client.image}
                        alt={client.name}
                        className="block w-full h-full object-contain"
                        priority
                        width={64}
                        height={64}
                    />
                  </div>
                </div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}
