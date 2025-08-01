"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative">
      <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ98voMz5Zu27La1/whatsapp-image-2025-05-03-at-11.09.38-dOqa1K5nDbU8O0q8.jpeg"
          alt="Contact Askari Estate & Builders"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
            <div className="w-20 h-1 bg-askari-gold mx-auto mb-6"></div>
            <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Get in touch for luxury homes and construction services today!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
