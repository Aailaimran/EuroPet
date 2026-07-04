import type { Metadata } from 'next'
import { Suspense } from 'react'
import PageHero from '@/components/ui/PageHero'
import RescueAdoptionForm from '@/components/forms/RescueAdoptionForm'

export const metadata: Metadata = {
  title: 'Dog Adoption Enquiry | Euro Pet Express',
  description: 'Enquire about adopting a rescue dog. Tell us about your home and we will be in touch within 12–24 hours.',
}

export default function RescueAdoptionPage() {
  return (
    <div>
      <PageHero
        title="Dog Adoption Enquiry"
        subtitle="Tell us about yourself and your home. We will connect you with the rescue organisation and arrange everything from there."
        breadcrumb="Home / Rescue a Dog / Adoption Enquiry"
      />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading form...</div>}>
                <RescueAdoptionForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Info Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-brand-dark text-white rounded-2xl p-8 space-y-6">
                <h4 className="font-display text-xl font-bold">What Happens Next?</h4>
                
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">We review your enquiry</p>
                      <p className="text-gray-400 text-xs mt-0.5">We read every enquiry carefully and match it against the dog's requirements.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">We contact you</p>
                      <p className="text-gray-400 text-xs mt-0.5">We'll be in touch within 12–24 hours to discuss your application.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Meet the rescue organisation</p>
                      <p className="text-gray-400 text-xs mt-0.5">We connect you with the rescue partner who cares for the dog.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold text-xs font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Arrange transport</p>
                      <p className="text-gray-400 text-xs mt-0.5">Once approved, we handle the paperwork and arrange safe transport.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-4">
                    <p className="text-brand-gold text-xs leading-relaxed font-medium">
                      Please note: Euro Pet Express facilitates transport only. The adoption decision is made by the rescue organisation. We will guide you through their process.
                    </p>
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
