import { Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function CtaStrip() {
  return (
    <section className="bg-navy py-10 border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl text-white font-bold">READY TO PLAN YOUR JOURNEY?</h3>
              <p className="text-gray-400 text-sm mt-1">Contact Euro Pet Express to check availability on our next scheduled departure.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link href="/contact" className="bg-gold text-navy font-bold px-6 py-3.5 rounded hover:bg-gold-light transition-colors uppercase tracking-wider text-xs flex items-center gap-2">
              <Mail className="w-4 h-4" />
              REQUEST TRANSPORT QUOTE
            </Link>
            <a href="tel:+447711123456" className="border border-white/30 text-white px-6 py-3.5 rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-xs flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +44 7711 123456
            </a>
            <a href="https://wa.me/447711123456" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-6 py-3.5 rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-xs flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WHATSAPP US
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
