import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="font-display text-2xl text-primary mb-4">CAFE FACE</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              A sanctuary for coffee lovers and art enthusiasts.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-xl text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 font-body text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                123 Luxury Avenue, Design District
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 000-FACE
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-xl text-white mb-6">Hours</h3>
            <ul className="space-y-4 text-gray-400 font-body text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon - Fri: 7am - 10pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary opacity-0" />
                <span>Sat - Sun: 8am - 11pm</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-xl text-white mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">f</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">i</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">t</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/20 font-mono text-xs uppercase tracking-widest">
            © 2025 Cafe Face. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
