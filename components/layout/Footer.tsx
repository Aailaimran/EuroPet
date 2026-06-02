import Link from 'next/link'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-border text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="font-display text-gold font-bold text-lg tracking-widest">EURO PET</div>
              <div className="text-white text-[10px] tracking-widest">— EXPRESS —</div>
              <div className="text-[8px] text-gray-400 uppercase tracking-wider italic mt-1">PREMIUM DOG TRANSPORT ACROSS EUROPE</div>
            </Link>
            <div className="flex items-center gap-3 mt-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-navy-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Licensing & Compliance', 'Our Vehicle', 'Animal Welfare'].map(l => (
                <li key={l}><Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-semibold mb-4">Routes</h4>
            <ul className="space-y-2">
              {['Routes & Schedule', 'Romania Routes', 'Poland Routes', 'Bulgaria Routes'].map(l => (
                <li key={l}><Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Transport Information', 'Documentation Guide', 'FAQ', 'Contact Us'].map(l => (
                <li key={l}><Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Cert Box */}
          <div>
            <div className="bg-navy-light rounded-xl p-5 border border-navy-border">
              <div className="text-gold font-bold text-sm">DEFRA Type 2 Authorised Transporter</div>
              <div className="text-gray-400 text-xs mt-1">Authorisation No: AT/2025/12345</div>
              <div className="text-gold font-bold text-sm mt-3">TRACES NT Registered</div>
              <div className="mt-4 w-16 h-8 bg-navy-border rounded flex items-center justify-center text-[10px] text-gray-400 font-semibold">
                DEFRA
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-500 text-xs text-center">
            © 2024 Euro Pet Express. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
