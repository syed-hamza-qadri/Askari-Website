"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-askari-green">
              About <span className="text-askari-gold">Askari Estate & Builders</span>
            </h2>
            <div className="w-20 h-1 bg-askari-gold mb-6"></div>
            <p className="text-gray-600 mb-6">
              Askari Estate & Builders has been a name of trust in the real estate industry since 1998. With over two
              decades of experience, we proudly serve our clients with integrity, transparency, and commitment to
              delivering value in every transaction.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-askari-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Specialized in luxury home construction in Sargodha</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-askari-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Team of experienced professionals dedicated to exceptional service</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-askari-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Over 200+ successful projects completed with client satisfaction</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-askari-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Building long-lasting relationships through professional craftsmanship</p>
              </div>
            </div>

            <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white mt-4">
              <Link href="/services">Our Services</Link>
            </Button>
        
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=866,fit=crop,trim=61.76470588235294;0;152.64705882352942;0/YZ98voMz5Zu27La1/skyline-tower-Yg2jMDkJ3MioWWrL.jpg"
                alt="Sky Line Tower"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-askari-green text-white p-6 rounded-lg shadow-lg hidden sm:block">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
