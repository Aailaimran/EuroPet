'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { CheckCircle } from 'lucide-react'

const inputClass = `w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 bg-white`

const labelClass = `block text-sm font-medium text-gray-700 mb-1.5`

function RescueInfoForm() {
  const searchParams = useSearchParams()
  const dogName = searchParams.get('dog') || ''
  const dogBreed = searchParams.get('breed') || ''
  const dogLocation = searchParams.get('location') || ''
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      alert('Please agree to be contacted before submitting.')
      return
    }
    setSubmitted(true)
    // TODO: Connect to CRM/email when ready
  }

  if (submitted) {
    return (
      <div className="min-h-[400px] flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="font-playfair text-2xl font-bold text-brand-dark mb-4">
            Thank you for your enquiry!
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We will review your request and be in touch within 12–24 hours with all the information you need{dogName ? ` about ${dogName}` : ''}.
          </p>
          <Link
            href="/rescue"
            className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:underline"
          >
            ← Back to Rescue a Dog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Info notice */}
        <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 mb-10">
          <p className="text-brand-dark text-sm leading-relaxed">
            <strong className="font-semibold">Please note:</strong>{' '}
            This form is for requesting information about rescue dog adoption — not for booking transport. Once you submit, our team will contact you with details about the dog, the rescue organisation, and the next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Section: About You */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-gold/20">
              About You
            </h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+44 or international"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Best Time to Call</label>
                <select className={inputClass}>
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9am–12pm)</option>
                  <option value="afternoon">Afternoon (12pm–5pm)</option>
                  <option value="evening">Evening (5pm–8pm)</option>
                  <option value="anytime">Any time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Dog You're Interested In */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-gold/20">
              Dog You&apos;re Interested In
            </h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Dog Name</label>
                <input
                  type="text"
                  defaultValue={dogName}
                  placeholder="Which dog are you enquiring about?"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Breed</label>
                <input
                  type="text"
                  defaultValue={dogBreed}
                  placeholder="Dog breed"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Dog&apos;s Current Location</label>
                <input
                  type="text"
                  defaultValue={dogLocation}
                  placeholder="e.g. Bucharest, Romania"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Section: Your Questions */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-gold/20">
              Your Questions
            </h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>What would you like to know? *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you would like to know about this dog, the adoption process, transport costs, or anything else you have questions about..."
                  className={`${inputClass} resize-vertical leading-relaxed`}
                />
              </div>
              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <select className={inputClass}>
                  <option value="">Please select</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="rescue">Rescue Organisation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Consent checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="rescue-consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer flex-shrink-0"
              style={{ accentColor: '#C9A84C' }}
            />
            <label
              htmlFor="rescue-consent"
              className="text-sm text-gray-600 leading-relaxed cursor-pointer"
            >
              I agree to be contacted by Euro Pet Express regarding this rescue dog enquiry. I understand my data will be used to process this request in accordance with the{' '}
              <a
                href="/privacy"
                className="text-brand-gold hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-brand-gold text-brand-dark font-bold text-sm px-6 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] mt-2"
          >
            Send My Request
          </button>

          <p className="text-center text-gray-400 text-xs">
            We respond to all enquiries within 12–24 hours
          </p>

        </form>
      </div>
    </section>
  )
}

export default function RescueInfoPage() {
  return (
    <div>
      <PageHero
        title="Request More Information"
        subtitle="Tell us which dog you are interested in and we will get back to you with everything you need to know."
        breadcrumb="Home / Rescue a Dog / Request Information"
      />
      <Suspense
        fallback={
          <div className="min-h-[400px] flex items-center justify-center bg-brand-cream">
            <p className="text-gray-400 text-sm">Loading form...</p>
          </div>
        }
      >
        <RescueInfoForm />
      </Suspense>
    </div>
  )
}
