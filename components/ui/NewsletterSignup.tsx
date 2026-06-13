// TODO — CLIENT DECISION NEEDED: This form currently 
// only shows a success message and does NOT send or 
// store email addresses anywhere. Before going live 
// with real users, connect this to an email 
// marketing service (e.g. Mailchimp, ConvertKit, 
// Brevo, or similar) via their API or embed form. 
// Confirm with client which provider they want to use.

'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire up to email service (Mailchimp, 
    // ConvertKit, or similar) when client decides 
    // on a provider. Currently shows success state 
    // only — no email is actually sent/stored.
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-brand-darkSecondary rounded-2xl border border-brand-gold/20 p-8 md:p-10 text-center max-w-2xl mx-auto">
      <Mail className="w-8 h-8 text-brand-gold mx-auto mb-4" />
      <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
        Stay Updated
      </h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        Get route updates, travel tips, and pet transport news from Euro Pet Express delivered to your inbox.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-brand-gold font-semibold text-sm"
        >
          <CheckCircle className="w-5 h-5" />
          Thank you! You're on the list.
        </motion.div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
          />
          <button
            type="submit"
            className="bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-lg hover:bg-brand-goldHover transition-colors uppercase tracking-wider text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}

      <p className="text-gray-500 text-[11px] mt-4">
        We respect your privacy. Unsubscribe at any time. See our{' '}
        <a href="/privacy" className="text-brand-gold hover:underline">Privacy Policy</a>.
      </p>
    </div>
  )
}
