import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Askari Estate & Builders - Luxury Homes in Sargodha",
  description:
    "Askari Estate & Builders offers premium real estate and construction services in Sargodha, specializing in luxury homes and commercial buildings.",
    icons: {
    icon: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png",
    apple: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
