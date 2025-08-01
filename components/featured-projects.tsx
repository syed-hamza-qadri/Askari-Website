"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

const projects = [
  {
    id: 1,
    title: "Eagle City",
    description:
      "Eagle City is one of the most elite and well-planned housing societies in Sargodha City, offering a prime location and a high standard of living.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=249,fit=crop/YZ98voMz5Zu27La1/img_9289-m6LZOnMQz9ceGo0B.JPG",
    price: "Price Starting 19 lacs/marla",
    action: "Details",
  },
  {
    id: 2,
    title: "Sargodha Enclave",
    description: "Explore affordable luxury with Sargodha Enclave - recommended by Askari Estate & Builders.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=249,fit=crop/YZ98voMz5Zu27La1/483066086_1089636843176717_6612217944265557671_n-1-AMq16RGoaRtnJOgR.jpg",
    price: "Price Starting 11 lac/ Marla",
    action: "Phone",
  },
  {
    id: 3,
    title: "Prime View Housing project",
    description: "Explore affordable luxury with prime view housing project - recommended by Askari Estate & Builders.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=249,fit=crop/YZ98voMz5Zu27La1/469462654_1806290383455168_5880237757631722025_n-AoPWo9nMaoubXnPZ.jpg",
    price: "Price Starting 7 lacs/marla",
    action: "Contact",
  },
]

export function FeaturedProjects() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-askari-green">Our Featured Projects</h2>
          <div className="w-20 h-1 bg-askari-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our premium housing societies and projects designed for modern living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-askari-green">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="font-semibold text-askari-gold">{project.price}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white w-1/2">
                    <a href="https://wa.me/923216023601">Contact</a>
                  </Button>
                  <Button
                    className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green w-1/2"
                    onClick={() => setShowQuoteDialog(true)}
                  >
                    Get a Quote
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white px-8">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
