"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { QuoteDialog } from "@/components/quote-dialog"
import { submitContactForm } from "@/app/actions/email"

export function ContactInfo() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("email", formData.email)
    formDataObj.append("message", formData.message)

    const result = await submitContactForm(formDataObj)

    setIsSubmitting(false)

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message })
      // Reset form data
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      })
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000)
    } else {
      setSubmitMessage({ type: "error", text: result.error })
    }
  }

  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-askari-green">Contact Us</h2>
            <div className="w-16 h-1 bg-askari-gold mb-6"></div>
            <p className="text-gray-600 mb-8">
              Visit us in Sargodha for luxury homes and comprehensive construction services from A to Z.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-askari-green/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-askari-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">
                    Skyline tower, Faisalabad Rd,
                    <br />
                    Ghani Park Sargodha, 40100, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-askari-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <p className="text-gray-600">Saturday - Thursday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-askari-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+92 321 6023601</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-askari-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">sales@askari.com.pk</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <div className="bg-white p-4 rounded-t-lg">
                <div className="flex items-start gap-2">
                  <Image
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png"
                    alt="Askari Logo"
                    width={24}
                    height={24}
                    className="object-contain mt-1"
                  />
                  <div>
                    <h4 className="font-bold text-askari-green text-base">Askari Estate</h4>
                    <p className="text-gray-600 text-sm">
                      Skyline tower, Faisalabad Rd,
                      <br />
                      Ghani Park Sargodha, 40100, Pakistan
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                      </div>
                      <span className="text-sm text-gray-600">4.2 (268 reviews)</span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/j6hjX8uPuH3U8Mia6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm inline-block mt-1"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-[250px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.616219156183!2d72.7014109762574!3d32.05257792065416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217900618cc9cd%3A0x3421ac502def0e4c!2sSkyline%20Hotel!5e0!3m2!1sen!2s!4v1751445378333!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Askari Estate & Builders Location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-askari-green">Send Us a Message</h2>
            <div className="w-16 h-1 bg-askari-gold mb-6"></div>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitMessage && (
              <div
                className={`border rounded-md p-4 mb-6 ${
                  submitMessage.type === "success"
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name*
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-askari-gold focus:ring-askari-gold"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number*
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-askari-gold focus:ring-askari-gold"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-askari-gold focus:ring-askari-gold"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or inquiry"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-askari-gold focus:ring-askari-gold"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-askari-green hover:bg-askari-green-dark text-white transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
