"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ServicesHero() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ98voMz5Zu27La1/img_9278-mP4OBa5B59S20l7K.JPG"
          alt="Services Background"
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
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-askari-green">Our Services</h1>
          <div className="w-20 h-1 bg-askari-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive real estate and construction services, specializing in{" "}
            <span className="font-semibold">luxury homes</span> in Sargodha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=304,fit=crop/YZ98voMz5Zu27La1/img_9278-mP4OBa5B59S20l7K.JPG"
              alt="Luxury Home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=304,fit=crop/YZ98voMz5Zu27La1/img_9273-YX4l7vL7GDCzWLVB.JPG"
              alt="Luxury Home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
