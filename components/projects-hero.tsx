"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsHero() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ98voMz5Zu27La1/img_9289-m6LZOnMQz9ceGo0B.JPG"
          alt="Projects Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      <div className="container px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-askari-green">Askari Projects</h1>
          <div className="w-20 h-1 bg-askari-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our luxury homes and construction services in Karachi
          </p>
        </motion.div>
      </div>
    </section>
  )
}
