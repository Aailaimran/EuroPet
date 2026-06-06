'use client'

import { CheckCircle2, PawPrint } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import {
  slideInLeftVariant,
  slideInRightVariant,
  fadeUpVariant,
  staggerContainerVariant,
  cardVariant,
  scaleInVariant,
  springSnappy,
  easeOutExpo,
} from '@/lib/motion'

const features = [
  'Climate-controlled transport area',
  'Secure fixed crate system',
  'Regular welfare inspection stops',
  'Eurotunnel crossings for reduced transit time',
  'DEFRA-compliant long-journey vehicle',
]

export default function VehicleSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-brand-darkSecondary py-20 relative overflow-hidden text-white">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left — Features */}
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4"
          >
            <h2 className="font-display text-white text-2xl font-bold mb-4">
              <SplitText text="Purpose-Built for Long Journeys" />
            </h2>
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-gray-300 text-sm leading-relaxed mb-6"
            >
              Our long-wheelbase Peugeot Boxer is configured for the safe and comfortable transport of up to 18 dogs in individual secure crates.
            </motion.p>

            <motion.ul
              variants={staggerContainerVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  variants={scaleInVariant}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Centre — Van placeholder */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4 flex items-center justify-center"
          >
            {/* TODO: Replace with actual Euro Pet Express van photograph when provided by client */}
            <motion.div
              whileHover={{ scale: 1.03, transition: springSnappy }}
              className="relative rounded-2xl w-full overflow-hidden border border-brand-gold/20 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Professional pet transport vehicle"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-4">
                <p className="text-gray-300 text-xs text-center italic">
                  Our purpose-built pet transport vehicle
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Welfare Box */}
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4"
          >
            <motion.div
              whileHover={{ y: -4, transition: springSnappy }}
              className="rounded-xl p-8 text-white h-full flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: '#0A1628',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              }}
            >
              <div className="mb-4">
                <PawPrint className="w-8 h-8 text-gold mb-2" />
                <h3 className="font-display text-xl font-bold text-white">Our Priority: Animal Welfare</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                All journeys are carried out in accordance with UK and EU animal welfare transport regulations. Dogs travel in individual secured crates and are monitored throughout the journey with scheduled welfare checks and rest stops.
              </p>

              <MagneticButton className="mt-6">
                <Link
                  href="/compliance#welfare"
                  data-cursor="hover"
                  className="block text-center border border-gold text-gold text-sm uppercase tracking-wider font-semibold py-3 rounded hover:bg-gold hover:text-navy transition-all"
                >
                  READ OUR WELFARE POLICY
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
