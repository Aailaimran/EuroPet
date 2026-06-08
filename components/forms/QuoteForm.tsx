'use client'
import { useState } from 'react'
import { PawPrint, CheckCircle } from 'lucide-react'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, wire up emailjs.sendForm() here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <div className="text-gold font-bold text-lg">Thank you!</div>
          <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 12–24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="from_name" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
        <input required type="email" name="reply_to" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="tel" name="phone" placeholder="Phone Number (with country code)" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
        <select required name="route" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm">
          <option value="">Select Route</option>
          <option value="Romania → UK">Romania → UK</option>
          <option value="Poland → UK">Poland → UK</option>
          <option value="Bulgaria → UK">Bulgaria → UK</option>
          <option value="UK → Romania">UK → Romania</option>
          <option value="UK → Poland">UK → Poland</option>
          <option value="UK → Bulgaria">UK → Bulgaria</option>
          <option value="Combined route">Combined route</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select required name="journey_type" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm">
          <option value="">Journey Type</option>
          <option value="Private owner">Private owner</option>
          <option value="Rescue shelter">Rescue shelter</option>
          <option value="Breeder">Breeder</option>
          <option value="Other">Other</option>
        </select>
        <input required type="number" min="1" max="18" name="number_of_pets" placeholder="Number of pets" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* FIX A — Add Pet Type dropdown */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Pet Type *
          </label>
          <select 
            required
            name="pet_type"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm bg-white"
          >
            <option value="">Select pet type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="ferret">Ferret</option>
            <option value="other">Other (please specify in notes)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Pet's Name *
          </label>
          <input required name="pet_name" placeholder="Pet's Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Pet Breed / Species *
          </label>
          <input required name="pet_breed" placeholder="e.g. Golden Retriever, Persian Cat, Ferret" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Pet Age & Weight *
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input required name="pet_age" placeholder="e.g. 2 years 3 months" className="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
            <input required name="pet_weight" placeholder="Weight in kg" className="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Preferred Departure Month *
          </label>
          <input type="month" required name="departure_month" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          About your pet / Any special requirements
        </label>
        <textarea rows={4} name="special_requirements" placeholder="Any special requirements" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm" />
      </div>

      <div className="flex items-center gap-2">
        <input required type="checkbox" id="agree" className="w-4 h-4 rounded border-gray-300" />
        <label htmlFor="agree" className="text-gray-500 text-xs">I agree to be contacted by Euro Pet Express regarding my quote request</label>
      </div>

      <button type="submit" className="w-full bg-gold text-navy font-bold px-6 py-4 rounded-lg hover:bg-gold-light transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
        REQUEST TRANSPORT QUOTE <PawPrint className="w-4 h-4" />
      </button>
    </form>
  )
}
