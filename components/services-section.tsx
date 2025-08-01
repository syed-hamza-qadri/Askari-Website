import { Building2, Hammer, HardHat, Ruler } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Building2 className="h-10 w-10 text-askari-gold" />,
    title: "Construction Management",
    description:
      "Expert management of construction projects from planning to completion, ensuring quality and timely delivery.",
  },
  {
    icon: <Ruler className="h-10 w-10 text-askari-gold" />,
    title: "Engineering Solutions",
    description:
      "Comprehensive engineering services including structural, civil, and mechanical engineering for diverse projects.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-askari-gold" />,
    title: "Infrastructure Development",
    description:
      "Development of critical infrastructure including roads, bridges, and utilities with a focus on durability.",
  },
  {
    icon: <Hammer className="h-10 w-10 text-askari-gold" />,
    title: "Renovation & Restoration",
    description:
      "Skilled renovation and restoration services that breathe new life into existing structures while preserving their integrity.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction and engineering services tailored to meet your specific
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
