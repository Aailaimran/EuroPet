import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TransportQuoteForm from '@/components/forms/TransportQuoteForm'
import { Phone, MessageCircle, Mail, Clock, Camera, MapPin, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request a Transport Quote | Euro Pet Express',
  description: 'Get a personalised pet transport quote. We respond within 12–24 hours.',
}

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Request a Transport Quote"
        subtitle="Tell us about your pet and journey. We will get back to you within 12–24 hours."
        breadcrumb="Home / Request a Quote"
      />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <TransportQuoteForm />
            </div>

            {/* Right Column: Contact Info Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-brand-dark text-white rounded-2xl p-8 space-y-6">
                <h4 className="font-display text-xl font-bold">Other Ways to Reach Us</h4>
                
                <div className="space-y-4">
                  <div>
                    <a href="tel:+441524959304" className="text-brand-gold font-semibold flex items-center gap-2 hover:underline">
                      <Phone className="w-4 h-4 shrink-0" />
                      +44 1524 959304
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5 ml-6">Mon–Sat, 8am–8pm UK time</p>
                  </div>

                  <div>
                    <a href="https://wa.me/447853147342" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-semibold flex items-center gap-2 hover:underline">
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      Chat on WhatsApp
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5 ml-6">Fastest response method</p>
                  </div>

                  <div>
                    <a href="mailto:info@europetexpress.co.uk" className="text-brand-gold font-semibold flex items-center gap-2 hover:underline">
                      <Mail className="w-4 h-4 shrink-0" />
                      info@europetexpress.co.uk
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10" />

                <div className="space-y-4">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                      <Camera className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Regular Photo & Video Updates</p>
                      <p className="text-gray-400 text-xs mt-0.5">Photos sent via WhatsApp throughout journey</p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Live Journey Updates</p>
                      <p className="text-gray-400 text-xs mt-0.5">Regular location updates at key stages</p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                      <MessageCircle className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">24-Hour WhatsApp Support</p>
                      <p className="text-gray-400 text-xs mt-0.5">Direct access throughout the journey</p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                      <Shield className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Animal First Aid Trained Drivers</p>
                      <p className="text-gray-400 text-xs mt-0.5">All drivers certified in animal welfare</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 bg-green-900/50 text-green-300 text-xs px-3 py-2 rounded-xl border border-green-500/10">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>Typical response: 12–24 hours</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
