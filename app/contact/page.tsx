import PageHero from '@/components/ui/PageHero'
import QuoteForm from '@/components/forms/QuoteForm'
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <PageHero title="Request a Transport Quote" subtitle="Fill in the form below and we will respond within 12–24 hours." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-navy text-white rounded-xl p-8">
                <div className="space-y-3 mb-6">
                  <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4">
                    What's Included
                  </p>

                  {/* Benefit 1 */}
                  <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        Regular Photo & Video Updates
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                        Photos and videos sent directly to you throughout the journey for peace of mind.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        24-Hour Live Vehicle Tracking
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                        Monitor your pet's transport progress in real time throughout the journey.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-gold">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        24-Hour WhatsApp Support
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                        Direct access to our team throughout the journey with AI support out of hours.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        All Drivers Animal First Aid Trained
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                        Trained to respond to animal welfare situations throughout the transport journey.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-display text-lg font-bold mb-4">Other Ways to Reach Us</h4>
                <div className="text-gold font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+44 7711 123456</span>
                </div>
                <div className="text-gray-400 text-sm">Mon–Sat, 8am–8pm UK time</div>

                <div className="mt-4 text-gold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <a href="https://wa.me/447711123456" className="hover:underline">WhatsApp Us</a>
                </div>
                <div className="text-gray-400 text-sm">Fastest response method</div>

                <div className="mt-4 text-gold flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@europetexpress.co.uk</span>
                </div>

                <div className="border-t border-navy-border my-6" />

                <div className="text-gray-400 text-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-8 bg-navy-border rounded flex items-center justify-center text-[10px] font-semibold text-gray-400">DEFRA</div>
                    <div>
                      <div>DEFRA Type 2 Authorised</div>
                      <div>Authorisation No: AT/2025/12345</div>
                      <div>TRACES NT Registered</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-green-900/50 text-green-300 text-xs px-3 py-2 rounded mt-4">
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
