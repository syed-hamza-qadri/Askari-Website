import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "infrastructure", label: "Infrastructure" },
]

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "A state-of-the-art office complex featuring sustainable design and cutting-edge amenities.",
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    category: "residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "Premium residential tower with high-end finishes and panoramic city views.",
  },
  {
    id: 3,
    title: "Highway Expansion Project",
    category: "infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    description: "Major highway expansion improving traffic flow and connectivity between urban centers.",
  },
  {
    id: 4,
    title: "Shopping Mall Development",
    category: "commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern shopping destination with diverse retail spaces and entertainment options.",
  },
  {
    id: 5,
    title: "Apartment Complex",
    category: "residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "Contemporary apartment complex with community amenities and green spaces.",
  },
  {
    id: 6,
    title: "Bridge Construction",
    category: "infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    description: "Innovative bridge design connecting communities with durability and aesthetic appeal.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {projectCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
