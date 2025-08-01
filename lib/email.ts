import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailData {
  name: string
  phone: string
  email?: string
  propertyType: string
  squareFeet: string
  location?: string
  additionalDetails?: string
}

export async function sendQuoteEmail(data: EmailData) {
  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2d3e2d; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; color: #c8a97e;">New Quote Request</h1>
          <p style="margin: 5px 0 0 0;">Askari Estate & Builders</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #2d3e2d; margin-bottom: 20px;">Client Information</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.phone}</td>
            </tr>
            ${
              data.email
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.email}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Property Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.propertyType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Area/Dimensions:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.squareFeet}</td>
            </tr>
            ${
              data.location
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Location:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.location}</td>
            </tr>
            `
                : ""
            }
            ${
              data.additionalDetails
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Additional Details:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.additionalDetails}</td>
            </tr>
            `
                : ""
            }
          </table>
        </div>
        
        <div style="background-color: #2d3e2d; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">This quote request was submitted through the Askari Estate & Builders website.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #c8a97e;">Please respond to the client promptly.</p>
        </div>
      </div>
    `

    const { data: result, error } = await resend.emails.send({
      from: "Askari Website <noreply@askari.com.pk>", // Using your verified domain
      to: ["saqib_imdad@yahoo.com"], // Client's email address
      subject: `New Quote Request from ${data.name}`,
      html: emailContent,
      replyTo: data.email || undefined,
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: result }
  } catch (error) {
    console.error("Email service error:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendContactEmail(data: {
  name: string
  phone: string
  email?: string
  message: string
}) {
  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2d3e2d; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; color: #c8a97e;">New Contact Message</h1>
          <p style="margin: 5px 0 0 0;">Askari Estate & Builders</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #2d3e2d; margin-bottom: 20px;">Contact Information</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.phone}</td>
            </tr>
            ${
              data.email
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.email}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2d3e2d; vertical-align: top;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #2d3e2d; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">This message was submitted through the Askari Estate & Builders website.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #c8a97e;">Please respond to the client promptly.</p>
        </div>
      </div>
    `

    const { data: result, error } = await resend.emails.send({
      from: "Askari Website <noreply@askari.com.pk>", // Using your verified domain
      to: ["saqib_imdad@yahoo.com"], // Client's email address
      subject: `New Contact Message from ${data.name}`,
      html: emailContent,
      replyTo: data.email || undefined,
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: result }
  } catch (error) {
    console.error("Email service error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
