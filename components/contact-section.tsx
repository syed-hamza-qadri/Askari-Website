"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-askari-green hover:bg-askari-green-dark">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-gray-600">123 Construction Avenue, Islamabad, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone Number</h4>
                    <p className="text-gray-600">+92 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Address</h4>
                    <p className="text-gray-600">info@askari.com.pk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 h-64 rounded-lg overflow-hidden shadow-lg">
              {/* This would be replaced with an actual map component in production */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
