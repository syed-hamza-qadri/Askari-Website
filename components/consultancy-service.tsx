"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function ConsultancyService() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=394,fit=crop/YZ98voMz5Zu27La1/img_9276-AMq13ew3rjhjDB2K.JPG"
              alt="Five Marla Consultancy"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-askari-green">Free Masjid Consultancy – A Service of Honor
</h2>
            <p className="text-gray-600 mb-6">
              At Askari Builders, we are proud to offer free consultancy services for Masjid construction as part of our commitment to community development and religious service.

            </p>
            <p className="text-gray-600 mb-6">
              It is our great honor to have designed and built Turkish-style Masjids in Sargodha City, blending architectural beauty with spiritual purpose. These projects are a testament to our dedication, craftsmanship, and deep respect for Islamic architecture.
            </p>
            <p className="text-gray-600 mb-6">
             We consider it a privilege to be trusted with such sacred spaces, and we welcome the opportunity to assist others in building houses of worship — with sincerity, expertise, and no consultancy charges.

            </p>
            <div className="mt-8">
              <h3 className="font-bold text-askari-green mb-4">Serving faith, building legacy — Askari Builders.</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white">
                  <a href="https://wa.me/923216023601">Contact</a>
                </Button>
                <Button
                  className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green"
                  onClick={() => setShowQuoteDialog(true)}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
