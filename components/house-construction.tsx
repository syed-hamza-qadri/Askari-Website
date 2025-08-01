"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function HouseConstruction() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-askari-green">House Construction</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Over 200+ luxury homes successfully delivered in sargodha</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6">
              At <span className="font-bold text-askari-green">Askari Builders</span>, we specialize in building{" "}
              <span className="font-bold">high-end luxury homes</span>, with a commitment to quality and attention to
              detail. Our focus is on delivering projects that exceed each client's vision and lifestyle.
            </p>

            <p className="mb-6">
              We offer a <span className="font-bold">comprehensive, start-to-finish service</span>, including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Initial Architectural Planning & Layout</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Structural Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Interior Design & Furnishing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Complete Turnkey Finishing</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-askari-green">Our Team Includes:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Top Architects</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Creative Interior Designers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Skilled Project Managers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Dedicated Site Supervisors</span>
              </li>
            </ul>

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

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=464,fit=crop/YZ98voMz5Zu27La1/img_9283-AQExaOjo1jie2W5A.JPG"
              alt="Luxury Home Construction"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
