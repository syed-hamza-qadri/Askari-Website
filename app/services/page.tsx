import { Navbar } from "@/components/navbar"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { HouseConstruction } from "@/components/house-construction"
import { ConstructionPlans } from "@/components/construction-plans"
import { ConsultancyService } from "@/components/consultancy-service"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <HouseConstruction />
      <ConstructionPlans />
      <ConsultancyService />
      <Footer />
    </main>
  )
}
