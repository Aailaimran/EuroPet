import PageHero from '@/components/ui/PageHero'
import QuoteForm from '@/components/forms/QuoteForm'

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
                <h4 className="font-display text-lg font-bold mb-4">Other Ways to Reach Us</h4>
                <div className="text-gold font-semibold">📞 +44 7711 123456</div>
                <div className="text-gray-400 text-sm">Mon–Sat, 8am–8pm UK time</div>

                <div className="mt-4 text-gold">💬 <a href="https://wa.me/447711123456" className="hover:underline">WhatsApp Us</a></div>
                <div className="text-gray-400 text-sm">Fastest response method</div>

                <div className="mt-4 text-gold">✉ info@europetexpress.co.uk</div>

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
                    ⏱ Typical response: 12–24 hours
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
