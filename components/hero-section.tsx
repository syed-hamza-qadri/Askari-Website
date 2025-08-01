import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function HeroSection() {
  return (
    <section className="relative">
      <Navbar />
      <div className="container flex flex-col lg:flex-row items-center gap-12 py-16 md:py-24">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Excellence <span className="text-askari-gold">Through Innovation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Askari delivers exceptional construction and engineering solutions with a commitment to quality, safety, and
            client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="bg-askari-green hover:bg-askari-green-dark">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Construction site"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-askari-green text-white p-6 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
