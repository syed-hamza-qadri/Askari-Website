"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function HandoverProjects() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-askari-green">Handover Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=239,fit=crop/YZ98voMz5Zu27La1/480348695_1066153485525053_8836614706505157488_n-m6LZlpqyNbC0LNEb.jpg"
              alt="Handover Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=235,fit=crop/YZ98voMz5Zu27La1/482277826_1084538303686571_909614751405825411_n-A3Q2bvg3pQsjjDgg.jpg"
              alt="Handover Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=251,fit=crop/YZ98voMz5Zu27La1/471770296_1823054635112076_5879924101855553059_n-AVL7oMWk6etk2e8p.jpg"
              alt="Handover Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=258,fit=crop,trim=292.57142857142856;0;292.57142857142856;0/YZ98voMz5Zu27La1/482075786_1080676797406055_1961892279990856202_n-A0xl650Mbkc7ogaR.jpg"
              alt="Handover Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=244,fit=crop,trim=0;174.20746887966806;0;174.20746887966806/YZ98voMz5Zu27La1/482009228_1082597637213971_5894580725729706968_n-AR0LXxwrLMhNX2eK.jpg"
              alt="Handover Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=258,fit=crop,trim=437.3107822410148;0;437.3107822410148;0/YZ98voMz5Zu27La1/473584279_1834063864011153_1266599154906909704_n-m7V3PRNZkQIaQ12R.jpg"
              alt="Handover Project"
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
