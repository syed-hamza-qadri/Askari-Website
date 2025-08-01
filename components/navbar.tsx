"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { QuoteDialog } from "@/components/quote-dialog"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [showQuoteDialog, setShowQuoteDialog] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Close menu when pathname changes
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-askari-green shadow-md">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 relative z-20">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png"
            alt="Askari Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-askari-gold">ASKARI</span>
            <span className="text-sm text-white/80">ESTATE & BUILDERS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium text-white transition-colors hover:text-askari-gold relative group py-2",
                pathname === item.href && "text-askari-gold",
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-askari-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button
            variant="default"
            size="lg"
            className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green font-medium ml-4"
            onClick={() => setShowQuoteDialog(true)}
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-askari-gold hover:bg-transparent relative z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-askari-green absolute w-full z-10 shadow-lg"
          >
            <nav className="flex flex-col space-y-4 py-6 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium text-white transition-colors hover:text-askari-gold py-2",
                    pathname === item.href && "text-askari-gold",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="default"
                className="bg-askari-gold hover:bg-askari-gold-dark text-askari-green font-medium w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false)
                  setShowQuoteDialog(true)
                }}
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteDialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog} />
    </header>
  )
}
