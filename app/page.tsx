import { HomeHero } from "@/components/home-hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeHero />
      <AboutSection />
      <FeaturedProjects />
      <Footer />
    </main>
  )
}
