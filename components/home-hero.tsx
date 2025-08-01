"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function HomeHero() {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="relative">
      <Navbar />
      <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
            poster="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ98voMz5Zu27La1/whatsapp-image-2025-05-03-at-11.09.38-dOqa1K5nDbU8O0q8.jpeg"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4 drop-shadow-lg">
                Welcome to <span className="text-askari-gold">ASKARI ESTATE & BUILDERS</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
                Building excellence through innovation and quality craftsmanship in Sargodha
              </p>

              {isMobile ? (
                <div className="mt-8 flex justify-center space-x-4 px-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-askari-green hover:bg-askari-green-dark text-white font-semibold shadow-lg w-1/2"
                  >
                    <Link href="/services">Services</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green font-semibold shadow-lg w-1/2"
                    onClick={() => setShowQuoteDialog(true)}
                  >
                    Get a Quote
                  </Button>
                </div>
              ) : (
                <div className="flex flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-askari-green hover:bg-askari-green-dark text-white font-semibold shadow-lg"
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green font-semibold shadow-lg"
                    onClick={() => setShowQuoteDialog(true)}
                  >
                    Get a Quote
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
