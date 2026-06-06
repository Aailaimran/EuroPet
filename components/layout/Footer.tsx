'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Phone, Mail } from 'lucide-react'
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

export default function Footer() {
  const { ref, isInView } = useScrollAnimation()

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/share/18HAUnUYuM/?mibextid=wwXIfr" },
    { Icon: Instagram, href: "https://www.instagram.com/europet26?utm_source=qr" },
    { Icon: MessageCircle, href: "https://wa.me/447711123456" }
  ]

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/10 text-white py-16 md:py-24">
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
                width={140}
                height={50}
                priority={true}
                className="object-contain h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xs">
              Premium dog transport between the UK and Europe. DEFRA authorised. Fully compliant. Always caring.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <MagneticButton key={i} strength={0.3}>
                  <motion.a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-cursor="hover"
                    whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5, color: '#C9A84C', borderColor: '#C9A84C', transition: springGentle }}
                    className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  >
                    <Icon size={14} />
                  </motion.a>
                </MagneticButton>
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
                { label: 'Animal Welfare', href: '/about#welfare' },
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
                { label: 'UK → Romania', href: '/routes#uk-romania' },
                { label: 'UK → Serbia', href: '/routes#uk-serbia' },
                { label: 'UK → Germany', href: '/routes#uk-germany' },
                { label: 'UK → France', href: '/routes#uk-france' },
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
              <a href="tel:+447711123456" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                <Phone size={14} className="text-gray-400" />
                +44 7711 123456
              </a>
              <a href="mailto:info@europetsexpress.com" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                <Mail size={14} className="text-gray-400" />
                info@europetsexpress.com
              </a>
              <a
                href="https://wa.me/447711123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline text-sm flex items-center gap-2 font-medium"
              >
                <MessageCircle size={14} className="text-brand-gold shrink-0" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-brand-darkSecondary rounded-lg p-4 border border-white/5 mt-2 shadow-inner">
              <div className="text-gray-400 text-xs font-semibold">DEFRA Type 2 Authorised</div>
              <div className="text-gray-500 text-[11px] mt-0.5">Auth No: AT/2023/12345</div>
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
