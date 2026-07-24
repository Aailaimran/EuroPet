'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

export default function RescueAdoptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const dogName = searchParams.get('dog') || ''
  const dogBreed = searchParams.get('breed') || ''
  const dogLocation = searchParams.get('location') || ''

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    dogName: dogName,
    dogBreed: dogBreed,
    dogLocation: dogLocation,
    whyAdopt: '',
    agree: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agree) {
      alert('Please agree to be contacted.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-rescue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          bestTimeToCall: '',
          dogName: formData.dogName,
          dogBreed: formData.dogBreed,
          dogLocation: formData.dogLocation,
          questions: formData.whyAdopt,
          howDidTheyHear: '',
          consent: formData.agree,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)

    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-brand-gold" />
        </div>
        <h3 className="font-playfair text-2xl font-bold text-brand-dark mb-2">
          Thank you for your adoption enquiry!
        </h3>
        <p className="text-gray-600 font-medium">
          We will review your application and be in touch within 12–24 hours to discuss next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
      {/* Section: About You */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          About You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Full Name *
            </label>
            <input
              id="fullName"
              required
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Email Address *
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+44 or international"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Your Location (town/city) *
            </label>
            <input
              id="location"
              required
              type="text"
              placeholder="e.g. Manchester, UK"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>
        </div>
      </div>

      {/* Section: Dog Information */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          About the Dog You're Interested In
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Dog Name
            </label>
            <input
              id="dogName"
              type="text"
              placeholder="Which dog are you enquiring about?"
              value={formData.dogName}
              onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogBreed" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Dog Breed
            </label>
            <input
              id="dogBreed"
              type="text"
              readOnly={!!dogBreed}
              value={formData.dogBreed}
              onChange={(e) => setFormData({ ...formData, dogBreed: e.target.value })}
              className={`w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base ${
                dogBreed ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''
              }`}
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="dogLocation" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Dog's Current Location
            </label>
            <input
              id="dogLocation"
              type="text"
              value={formData.dogLocation}
              onChange={(e) => setFormData({ ...formData, dogLocation: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="whyAdopt" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Why do you want to adopt a rescue dog? *
            </label>
            <textarea
              id="whyAdopt"
              required
              rows={4}
              placeholder="Tell us what drew you to rescue adoption and why you think you would be a great match for this dog..."
              value={formData.whyAdopt}
              onChange={(e) => setFormData({ ...formData, whyAdopt: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <input
          required
          type="checkbox"
          id="agree"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="w-5 h-5 rounded border-gray-400 text-brand-gold focus:ring-brand-gold mt-0.5 flex-shrink-0 cursor-pointer"
          style={{ accentColor: '#C9A84C' }}
        />
        <label htmlFor="agree" className="text-gray-700 text-sm leading-relaxed cursor-pointer">
          I agree to be contacted by Euro Pet Express regarding my rescue dog enquiry. I understand my data will be used in accordance with the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-brand-goldHover transition-colors duration-200 text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'SUBMIT ADOPTION ENQUIRY'}
      </button>
    </form>
  )
}

