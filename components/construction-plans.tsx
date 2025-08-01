"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QuoteDialog } from "@/components/quote-dialog"

export function ConstructionPlans() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false)

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-askari-green">Our Construction Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Askari Builders, we offer flexible construction plans tailored to your needs and budget. Each plan is
            clearly documented with a <span className="font-bold">legally binding contract</span> that outlines all
            services, specifications, and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-askari-green">1. Full Construction Plan (Turnkey Solution)</h3>
            <p className="text-gray-600 mb-6">This is a complete, all-in-one package that includes:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Architectural Design & Structural Drawings</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Interior Design</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>All Materials (as agreed before start)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Final Furnished Delivery</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mb-6">
              All materials, specifications, and services are detailed in the contract with clear responsibilities for
              both parties and execution and delivery.
            </p>
          </div>

          {/* Plan 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-askari-green">2. Grey Structure Construction Plan</h3>
            <p className="text-gray-600 mb-6">This plan includes:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Architectural Drawings & Site Planning</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>All Grey Structure Work (Foundation, Walls, Roofing, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Basic Utilities Setup</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mb-6">
              Every construction material to be used (bricks, cement, steel, plumbing etc.) is mentioned in the contract
              before work begins.
            </p>
          </div>

          {/* Plan 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-askari-green">3. Consultancy & Supervision Plan</h3>
            <p className="text-gray-600 mb-6">
              This is a ideal plan for those who plan to purchase their own materials but need expert guidance.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Architecture & Structural Drawings</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>On-Site Construction Supervision</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-askari-gold mt-1 flex-shrink-0" />
                <span>Quality Control & Material Validation</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mb-6">
              All deliverables are clearly documented and guaranteed in their description. We ensure proper guidance and
              professional execution throughout the project.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Choose the plan that best fits your vision — and let Askari Builders help you file with honesty, expertise,
            and commitment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-askari-green hover:bg-askari-green-dark text-white">
              <a href="https://wa.me/923216023601">Contact</a>
            </Button>
            <Button
              className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green"
              onClick={() => setShowQuoteDialog(true)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </section>
  )
}
