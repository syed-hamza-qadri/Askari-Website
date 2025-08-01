"use server"

import { sendQuoteEmail, sendContactEmail, type EmailData } from "@/lib/email"

export async function submitQuoteForm(formData: FormData) {
  try {
    const data: EmailData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || undefined,
      propertyType: formData.get("propertyType") as string,
      squareFeet: formData.get("squareFeet") as string,
      location: (formData.get("location") as string) || undefined,
      additionalDetails: (formData.get("additionalDetails") as string) || undefined,
    }

    // Validate required fields
    if (!data.name || !data.phone || !data.propertyType || !data.squareFeet) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Send email
    const emailResult = await sendQuoteEmail(data)

    if (!emailResult.success) {
      return {
        success: false,
        error: "Failed to send quote request. Please try again.",
      }
    }

    return {
      success: true,
      message: "Quote request sent successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Quote form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || undefined,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.phone || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Send email
    const emailResult = await sendContactEmail(data)

    if (!emailResult.success) {
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      }
    }

    return {
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
