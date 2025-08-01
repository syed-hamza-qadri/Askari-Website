import { Navbar } from "@/components/navbar"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </main>
  )
}
