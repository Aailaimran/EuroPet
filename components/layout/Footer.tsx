// TODO — CONFIRM WITH CLIENT: Phone number 
// standardised to +44 7853 147342 (matches existing 
// WhatsApp links) since +44 7711 123456 appeared to 
// be placeholder text. Please confirm this is the 
// correct live business number, or provide the 
// correct one to use everywhere.

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import MagneticButton from '@/components/ui/MagneticButton'
import { staggerContainerVariant, cardVariant, springGentle } from '@/lib/motion'

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li className="group">
      <Link href={href} data-cursor="hover" className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-0">
        <motion.span
          className="text-brand-gold mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-200"
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          •
        </motion.span>
        {label}
      </Link>
    </li>
  )
}

function NewsletterSignupInline() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to email service provider
    // (Mailchimp, ConvertKit, Brevo, etc.)
    // when client decides on provider.
    // Currently shows success UI only.
    if (email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 bg-brand-gold/10 border border-brand-gold/30 rounded-xl px-6 py-4"
      >
        <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
        <div>
          <p className="text-white text-sm font-semibold">
            You're on the list!
          </p>
          <p className="text-gray-400 text-xs mt-0.5">
            We'll be in touch with route updates and pet travel news.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
    >
      <div className={`flex-1 relative rounded-lg border transition-all duration-200 ${focused ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-white/10'} bg-white/5`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter your email address"
          className="w-full bg-transparent px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none rounded-lg"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-lg hover:bg-brand-goldHover transition-colors uppercase tracking-wider text-sm whitespace-nowrap inline-flex items-center justify-center gap-2 shadow-md"
      >
        Subscribe
      </motion.button>
    </form>
  )
}

export default function Footer() {
  const { ref, isInView } = useScrollAnimation()

  // TODO: Replace # with TikTok URL when provided by client
  // TODO: Replace # with YouTube URL when provided by client
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/18HAUnUYuM/?mibextid=wwXIfr',
      color: '#1877F2',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/europet26?utm_source=qr',
      color: '#E4405F',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@europet.express?_r=1&_t=ZN-97GWJ9B2E6N',
      color: '#000000',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/447853147342',
      color: '#25D366',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      color: '#FF0000',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/10 text-white py-16 md:py-24 pb-safe pb-[env(safe-area-inset-bottom)]">
      {/* Newsletter Signup — full width above footer columns */}
      <div className="border-b border-brand-gold/10 pb-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left side — heading and description */}
            <div className="text-center lg:text-left max-w-md">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Stay Connected
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                Get Route Updates
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive departure schedules, pet travel tips, and service updates from Euro Pet Express directly in your inbox.
              </p>
            </div>

            {/* Right side — email form */}
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              <NewsletterSignupInline />
            </div>

          </div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={cardVariant} className="flex flex-col">
            <Link href="/" className="inline-block" data-cursor="hover">
              <Image
                src="/logo.png"
                alt="Euro Pet Express"
                width={200}
                height={75}
                priority={false}
                className="object-contain h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xs">
              Premium pet transport between the UK and Europe. DEFRA authorised. Fully compliant. Always caring.
            </p>
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {socialLinks.map(({ name, href, color, svg }) => (
                <a
                  key={name}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={name}
                  title={name}
                  style={{ '--brand-color': color } as React.CSSProperties}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--brand-color)] hover:bg-[var(--brand-color)] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Company */}
          <motion.div variants={cardVariant}>
            <h4 className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Vehicle', href: '/about#vehicle' },
                { label: 'Our Services', href: '/services' },
                { label: 'Rescue a Dog', href: '/rescue' },
                { label: 'Animal Welfare', href: '/compliance#welfare' },
                { label: 'Licensing & Compliance', href: '/compliance' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map(l => (
                <FooterLink key={l.label} label={l.label} href={l.href} />
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Routes */}
          <motion.div variants={cardVariant}>
            <h4 className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">ROUTES</h4>
            <ul className="space-y-2">
              {[
                { label: 'All Routes', href: '/routes' },
                { label: 'UK ↔ Romania', href: '/routes#uk-romania' },
                { label: 'UK ↔ Serbia', href: '/routes#uk-serbia' },
                { label: 'UK ↔ Germany', href: '/routes#uk-germany' },
                { label: 'UK ↔ France', href: '/routes#uk-france' },
                { label: 'More Routes', href: '/routes' },
              ].map(l => (
                <FooterLink key={l.label} label={l.label} href={l.href} />
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Get In Touch */}
          <motion.div variants={cardVariant} className="flex flex-col">
            <h4 className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">GET IN TOUCH</h4>
            <div className="space-y-2 mb-4">
              <a
                href="tel:+441524959304"
                className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2"
              >
                <Phone size={14} className="text-gray-400 shrink-0" />
                +44 1524 959304
              </a>
              <a href="mailto:info@europetexpress.co.uk" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                <Mail size={14} className="text-gray-400" />
                info@europetexpress.co.uk
              </a>
              <a
                href="https://wa.me/447853147342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline text-sm flex items-center gap-2 font-medium"
              >
                <MessageCircle size={14} className="text-brand-gold shrink-0" />
                Chat on WhatsApp
              </a>
            </div>

            {/* TODO — CONFIRM WITH CLIENT: Replace with real 
            DEFRA Type 2 authorisation number. Previously showed 
            two conflicting fake numbers (AT/2023/12345 and 
            AT/2025/12345) — both appear to be placeholders. 
            Using honest interim text until real number 
            is provided. */}
            <div className="bg-brand-darkSecondary rounded-lg p-4 border border-white/5 mt-2 shadow-inner">
              <div className="text-gray-400 text-xs font-semibold">DEFRA Type 2 Authorised Transporter</div>
              <div className="text-gray-500 text-[11px] mt-0.5">Authorisation number available on request</div>
              <div className="text-gray-400 text-xs font-semibold mt-2.5">TRACES NT Registered</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Euro Pet Express. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 text-xs hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-gray-500 text-xs hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
