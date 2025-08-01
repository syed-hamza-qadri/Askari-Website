"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function ProjectsInProgress() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-askari-green">Project in Progress</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/YZ98voMz5Zu27La1/img_9289-m6LZOnMQz9ceGo0B.JPG"
              alt="Project in Progress"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/YZ98voMz5Zu27La1/img_9283-AQExaOjo1jie2W5A.JPG"
              alt="Project in Progress"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white px-8 py-3">
              <a href="https://wa.me/923216023601">Contact</a>
            </Button>
            <Button
              className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green px-8 py-3"
              onClick={() => setShowQuoteDialog(true)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
