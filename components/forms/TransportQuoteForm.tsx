'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { ROUTES } from '@/lib/routesData'

export default function TransportQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    petType: '',
    petName: '',
    breed: '',
    petAge: '',
    petWeight: '',
    route: '',
    collectionLocation: '',
    deliveryAddress: '',
    preferredDate: '',
    message: '',
    agree: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agree) {
      alert('Please agree to be contacted before submitting.')
      return
    }
    // In production, this would connect to Zoho CRM API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="font-playfair text-2xl font-bold text-brand-dark mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600 font-medium">
          Your quote request has been received.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          We will contact you within 12–24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
      {/* Section: Your Details */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          Your Details
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

          <div className="flex flex-col gap-1.5 md:col-span-2">
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
        </div>
      </div>

      {/* Section: Your Pet */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          Your Pet
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="petType" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Pet Type *
            </label>
            <select
              id="petType"
              required
              value={formData.petType}
              onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white"
            >
              <option value="">Select pet type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Ferret">Ferret</option>
              <option value="Other">Other (please specify in notes)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="petName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Pet Name *
            </label>
            <input
              id="petName"
              required
              type="text"
              placeholder="Your pet's name"
              value={formData.petName}
              onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="breed" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Breed / Species *
            </label>
            <input
              id="breed"
              required
              type="text"
              placeholder="e.g. Golden Retriever, Persian Cat"
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="petAge" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Pet Age
              </label>
              <input
                id="petAge"
                type="text"
                placeholder="e.g. 2 years"
                value={formData.petAge}
                onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-3 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="petWeight" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Weight (kg)
              </label>
              <input
                id="petWeight"
                type="number"
                placeholder="Weight in kg (e.g. 25)"
                value={formData.petWeight}
                onChange={(e) => setFormData({ ...formData, petWeight: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-3 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
                style={{ appearance: 'textfield' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Your Journey */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          Your Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="route" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Route *
            </label>
            <div className="relative">
              <select
                id="route"
                required
                value={formData.route}
                onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white appearance-none pr-10 cursor-pointer"
              >
                <option value="">Select your route</option>
                {ROUTES
                  .filter(r => r.isActive)
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map(route => (
                    <option key={route.slug} value={route.slug}>
                      {route.name}
                    </option>
                  ))
                }
                <option value="other">Other / Not Listed</option>
              </select>
              {/* Custom double arrow indicator — routes are bidirectional */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 font-bold text-sm" aria-hidden="true">
                {'\u2194'}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="collectionLocation" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Collection City & Country *
            </label>
            <input
              id="collectionLocation"
              required
              type="text"
              placeholder="e.g. Bucharest, Romania"
              value={formData.collectionLocation}
              onChange={(e) => setFormData({ ...formData, collectionLocation: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="deliveryAddress" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Delivery City &amp; Country *
            </label>
            <input
              id="deliveryAddress"
              required
              type="text"
              placeholder="e.g. Manchester, United Kingdom"
              value={formData.deliveryAddress}
              onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="preferredDate" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Preferred Travel Date
            </label>
            <input
              id="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base"
            />
          </div>
        </div>
      </div>

      {/* Section: Additional Information */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          Additional Information
        </h3>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Any additional details, special requirements, questions, or information about your pet or journey..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base resize-none"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 mt-4 mb-2">
        <input
          required
          type="checkbox"
          id="agree"
          name="consent"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold cursor-pointer flex-shrink-0"
          style={{ accentColor: '#C9A84C' }}
        />
        <label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
          I agree to be contacted by Euro Pet Express regarding my transport enquiry. I understand my data will be used to process this request in accordance with the{' '}
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

      <button
        type="submit"
        className="w-full bg-brand-gold text-brand-dark font-bold text-sm px-6 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        Submit Transport Quote Request
      </button>
    </form>
  )
}

