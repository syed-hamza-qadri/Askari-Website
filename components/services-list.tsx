import { Check } from "lucide-react"

export function ServicesList() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-askari-green">
              Built with confidence. Build with Askari Estate & Builders.
            </h2>
            <p className="text-gray-600 mb-6">Our comprehensive services include:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Architectural Design & Layout Planning</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Civil Structure Construction</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Finishing Works (Electrical, Plumbing, Paint, Fixtures)</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4 text-askari-green">We specialize in constructing:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Houses | Commercial | Plazas | Hospitals | Masjids | (Mosques)</span>
              </li>
            </ul>

            <p className="mt-6 text-gray-600">
              With over <span className="font-bold text-askari-green">200+ successful projects</span> completed, our
              experienced team is committed to quality, on-time design, and customer satisfaction. We believe in
              building long-lasting relationships through professional craftsmanship to bring your vision to life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-askari-green">
              We specialize in a wide range of real estate services, including:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Residential Plots</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Commercial Plots</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Agricultural Land</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Commercial Buildings</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1" />
                <span>Residential Houses</span>
              </li>
            </ul>

            <p className="mt-8 text-gray-600 italic">"Your vision, our mission: Let's build your future together."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
