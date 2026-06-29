'use client'

import { Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import MagneticButton from '@/components/ui/MagneticButton'
import { fadeUpVariant, fadeUpFastVariant, staggerContainerVariant, slideInLeftVariant } from '@/lib/motion'

export default function CtaStrip() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-navy py-10 border-t border-gold/10 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left Text */}
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(201, 168, 76, 0.08)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                boxShadow: '0 2px 12px rgba(201, 168, 76, 0.1)',
              }}
            >
              <Phone className="w-6 h-6 text-gold" />
            </motion.div>
            <div>
              <h3 className="font-display text-xl text-white font-bold">READY TO PLAN YOUR JOURNEY?</h3>
              <p className="text-gray-400 text-sm mt-1">Contact Euro Pet Express to check availability on our next scheduled departure.</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <motion.div variants={fadeUpFastVariant}>
              <MagneticButton>
                <Link
                  href="/contact"
                  data-cursor="hover"
                  className="bg-gold text-navy font-bold px-6 py-3.5 rounded hover:bg-gold-light transition-colors uppercase tracking-wider text-xs flex items-center gap-2"
                  style={{ boxShadow: 'var(--shadow-gold)' }}
                >
                  <Mail className="w-4 h-4" />
                  REQUEST TRANSPORT QUOTE
                </Link>
              </MagneticButton>
            </motion.div>
            <motion.div variants={fadeUpFastVariant}>
              <MagneticButton>
                <a
                  href="tel:+441524959304"
                  data-cursor="hover"
                  className="border border-white/30 text-white px-6 py-3.5 rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +44 1524 959304
                </a>
              </MagneticButton>
            </motion.div>
            <motion.div variants={fadeUpFastVariant}>
              <MagneticButton>
                <a
                  href="https://wa.me/447853147342"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="border border-white/30 text-white px-6 py-3.5 rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP US
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
