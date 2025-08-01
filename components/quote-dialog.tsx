"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useMediaQuery } from "@/hooks/use-media-query"
import { submitQuoteForm } from "@/app/actions/email"

interface QuoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    squareFeet: "",
    location: "",
    additionalDetails: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    const result = await submitQuoteForm(formDataObj)

    setIsSubmitting(false)

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message })
      // Reset form after success
      setTimeout(() => {
        setSubmitMessage(null)
        onOpenChange(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
          propertyType: "",
          squareFeet: "",
          location: "",
          additionalDetails: "",
        })
      }, 3000)
    } else {
      setSubmitMessage({ type: "error", text: result.error })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${isMobile ? "w-[95%] p-4 max-h-[90vh] overflow-y-auto" : "sm:max-w-[500px]"}`}>
        <DialogHeader className={`${isMobile ? "mb-2" : "mb-4"}`}>
          <DialogTitle className={`text-xl ${isMobile ? "" : "text-2xl"} font-bold text-askari-green`}>
            Get a Personalized Quote
          </DialogTitle>
          <DialogDescription className={`${isMobile ? "text-sm" : ""}`}>
            Please provide your project details to receive an accurate quote from our team.
          </DialogDescription>
        </DialogHeader>

        {submitMessage && (
          <div
            className={`border rounded-md p-4 my-2 ${
              submitMessage.type === "success"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className={`space-y-3 ${isMobile ? "mt-2" : "mt-4"}`}>
          <div className={`grid grid-cols-1 ${isMobile ? "gap-3" : "sm:grid-cols-2 gap-4"}`}>
            <div className="space-y-1.5">
              <Label htmlFor="name" className={`${isMobile ? "text-sm" : ""}`}>
                Full Name*
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={`${isMobile ? "h-9 text-sm" : ""}`}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className={`${isMobile ? "text-sm" : ""}`}>
                Phone Number*
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
                className={`${isMobile ? "h-9 text-sm" : ""}`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className={`${isMobile ? "text-sm" : ""}`}>
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={`${isMobile ? "h-9 text-sm" : ""}`}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="propertyType" className={`${isMobile ? "text-sm" : ""}`}>
              Property Type*
            </Label>
            <Select
              value={formData.propertyType}
              onValueChange={(value) => handleSelectChange("propertyType", value)}
              required
            >
              <SelectTrigger id="propertyType" className={`${isMobile ? "h-9 text-sm" : ""}`}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="agricultural land">Agricultural Land</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="squareFeet" className={`${isMobile ? "text-sm" : ""}`}>
              Area/Dimensions*
            </Label>
            <Input
              id="squareFeet"
              name="squareFeet"
              value={formData.squareFeet}
              onChange={handleChange}
              placeholder="e.g., 1200 sq ft or 30x40 ft"
              required
              className={`${isMobile ? "h-9 text-sm" : ""}`}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className={`${isMobile ? "text-sm" : ""}`}>
              Location
            </Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Project location"
              className={`${isMobile ? "h-9 text-sm" : ""}`}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="additionalDetails" className={`${isMobile ? "text-sm" : ""}`}>
              Additional Details
            </Label>
            <Textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Any specific requirements or questions"
              rows={isMobile ? 2 : 3}
              className={`${isMobile ? "text-sm" : ""}`}
            />
          </div>

          <Button
            type="submit"
            className={`w-full bg-askari-green hover:bg-askari-green-dark text-white ${isMobile ? "h-9 text-sm mt-2" : "mt-4"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Quote"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
