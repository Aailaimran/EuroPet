'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

export default function RescueAdoptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const dogName = searchParams.get('dog') || ''
  const dogBreed = searchParams.get('breed') || ''
  const dogLocation = searchParams.get('location') || ''

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    children: '',
    otherPets: '',
    experience: '',
    dogName: dogName,
    dogBreed: dogBreed,
    dogLocation: dogLocation,
    whyAdopt: '',
    additionalInfo: '',
    agree: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this connects to the rescue organisation partner notification system
    setSubmitted(true)
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

      {/* Section: About Your Home */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          About Your Home
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="propertyType" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Property Type *
            </label>
            <select
              id="propertyType"
              required
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white"
            >
              <option value="">Select property type</option>
              <option value="House with garden">House with garden</option>
              <option value="House without garden">House without garden</option>
              <option value="Flat/apartment">Flat/apartment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="children" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Do you have children? *
            </label>
            <select
              id="children"
              required
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white"
            >
              <option value="">Please select</option>
              <option value="No children">No children</option>
              <option value="Children aged 0–4">Children aged 0–4</option>
              <option value="Children aged 5–11">Children aged 5–11</option>
              <option value="Children aged 12–17">Children aged 12–17</option>
              <option value="Children aged 18+">Children aged 18+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="otherPets" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Other pets at home?
            </label>
            <select
              id="otherPets"
              required
              value={formData.otherPets}
              onChange={(e) => setFormData({ ...formData, otherPets: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white"
            >
              <option value="">Please select</option>
              <option value="No other pets">No other pets</option>
              <option value="Other dogs">Other dogs</option>
              <option value="Cats">Cats</option>
              <option value="Both dogs and cats">Both dogs and cats</option>
              <option value="Other animals">Other animals</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="experience" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Previous dog ownership experience *
            </label>
            <select
              id="experience"
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base bg-white"
            >
              <option value="">Please select</option>
              <option value="First time dog owner">First time dog owner</option>
              <option value="Previous dog owner">Previous dog owner</option>
              <option value="Experienced with rescue dogs">Experienced with rescue dogs</option>
              <option value="Professional dog handler">Professional dog handler</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section: About the Dog You're Interested In */}
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

      {/* Section: Your Message */}
      <div>
        <h3 className="font-playfair text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
          Your Message
        </h3>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="additionalInfo" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            rows={5}
            placeholder="Anything else you'd like us to know — your daily routine, how much time you have for a dog, your garden size, experience with the specific breed, or any questions you have for us..."
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-base resize-none"
          />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          required
          type="checkbox"
          id="agree"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="w-4 h-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold mt-1"
        />
        <label htmlFor="agree" className="text-gray-500 text-xs leading-normal">
          I agree to be contacted by Euro Pet Express regarding my adoption enquiry
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gold text-navy font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-gold-light transition-colors duration-200 text-sm flex items-center justify-center gap-2"
      >
        SUBMIT ADOPTION ENQUIRY
      </button>
    </form>
  )
}

