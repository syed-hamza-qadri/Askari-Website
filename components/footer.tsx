import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-white">
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png"
                alt="Askari Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-askari-gold">ASKARI</span>
                <span className="text-sm text-white/80">ESTATE & BUILDERS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Askari Estate & Builders has been a name of trust in the real estate industry since 1998. With over two
              decades of experience, we proudly serve our clients with integrity and commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.facebook.com/@askaribuilder/"
                className="bg-askari-green/30 p-3 rounded-full text-white hover:bg-askari-gold hover:text-askari-green transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/askari_builders?igsh=eXAwc2RqZWJhMXVr"
                className="bg-askari-green/30 p-3 rounded-full text-white hover:bg-askari-gold hover:text-askari-green transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@askaribuilders190?_t=ZS-8w7q3CLhls0&_r=1"
                className="bg-askari-green/30 p-3 rounded-full text-white hover:bg-askari-gold hover:text-askari-green transition-colors"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@askaribuilders?si=sLuztMl0AmDfQQ07"
                className="bg-askari-green/30 p-3 rounded-full text-white hover:bg-askari-gold hover:text-askari-green transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/923216023601"
                className="bg-askari-green/30 p-3 rounded-full text-white hover:bg-askari-gold hover:text-askari-green transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-askari-gold mb-6">Contact Information</h3>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="bg-askari-green/20 p-3 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-askari-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Our Location</h4>
                  <p className="text-gray-400">
                    Skyline tower, Faisalabad Rd, 
                      <br />
                    Ghani Park Sargodha, 40100, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/20 p-3 rounded-full mt-1">
                  <Phone className="h-5 w-5 text-askari-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone Numbers</h4>
                  <p className="text-gray-400">+92 321 6023601</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/20 p-3 rounded-full mt-1">
                  <Mail className="h-5 w-5 text-askari-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Address</h4>
                  <p className="text-gray-400">sales@askari.com.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-askari-green/20 p-3 rounded-full mt-1">
                  <Clock className="h-5 w-5 text-askari-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                  <p className="text-gray-400">Saturday - Thursday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold text-askari-gold mb-6">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-white p-4 rounded-t-lg">
                <div className="flex items-start gap-2">
                  <Image
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,fit=crop,q=95/YZ98voMz5Zu27La1/logo-askri-A3Q2VDeq0eHg0BbY.png"
                    alt="Askari Logo"
                    width={24}
                    height={24}
                    className="object-contain mt-1"
                  />
                  <div>
                    <h4 className="font-bold text-askari-green text-base">Askari Estate</h4>
                    <p className="text-gray-600 text-sm">
                     Skyline tower, Faisalabad Rd, 
                      <br />
                    Ghani Park Sargodha, 40100, Pakistan
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                      </div>
                      <span className="text-sm text-gray-600">4.2 (268 reviews)</span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/j6hjX8uPuH3U8Mia6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm inline-block mt-1"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.616219156183!2d72.7014109762574!3d32.05257792065416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217900618cc9cd%3A0x3421ac502def0e4c!2sSkyline%20Hotel!5e0!3m2!1sen!2s!4v1751445378333!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Askari Estate & Builders Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6 px-4 flex justify-center items-center">
          <p className="text-gray-400 text-center font-medium">
            © {new Date().getFullYear()} Askari Estate & Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
