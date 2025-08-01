import { Navbar } from "@/components/navbar"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsInProgress } from "@/components/projects-in-progress"
import { HandoverProjects } from "@/components/handover-projects"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ProjectsHero />
      <ProjectsInProgress />
      <HandoverProjects />
      <Footer />
    </main>
  )
}
