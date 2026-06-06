'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { scaleInVariant, staggerContainerVariant, fadeUpVariant, springSnappy } from '@/lib/motion'
import { PawPrint, Check, Train } from 'lucide-react'

export default function TrustBar() {
  const { ref, isInView } = useScrollAnimation()

  const certs = [
    { abbr: 'DEFRA', label: 'Department for Environment\nFood & Rural Affairs', icon: null },
    { abbr: 'NT', label: 'TRACES', icon: null },
    { abbr: '', label: 'Animal Welfare\nRegulation Compliant', icon: <Check className="w-5 h-5 text-gold" /> },
    { abbr: '', label: 'Eurotunnel\nCalais–Folkestone Route', icon: <Train className="w-5 h-5 text-gold" /> },
  ]

  return (
    <section className="bg-navy border-y border-gold/10 py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

          {/* Left text */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:w-[30%] flex items-center gap-3 text-center lg:text-left"
          >
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <PawPrint className="w-5 h-5 text-gold" />
                <span className="text-gold font-bold text-sm tracking-widest uppercase">
                  Safe. Compliant. Reliable.
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Every journey planned around welfare, comfort and trust.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block w-px h-14 bg-gold/20 origin-top"
          />

          {/* Certs */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                variants={scaleInVariant}
                whileHover={{ scale: 1.05, transition: springSnappy }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-12 h-12 rounded-lg border border-gold/20 flex items-center justify-center text-gold font-bold text-xs backdrop-blur-sm"
                  style={{
                    background: 'rgba(201, 168, 76, 0.08)',
                    boxShadow: '0 2px 12px rgba(201, 168, 76, 0.1)',
                  }}
                >
                  {cert.icon ? cert.icon : cert.abbr}
                </div>
                <span className="text-gray-400 text-[10px] leading-tight whitespace-pre-line">{cert.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
