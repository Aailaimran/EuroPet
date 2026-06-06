'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { easeOutExpo, staggerContainerVariant, fadeUpFastVariant } from '@/lib/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85])
  const blurValue = useTransform(scrollY, [0, 80], [0, 20])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.1])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Routes & Schedule', href: '/routes' },
    { label: 'Our Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Licensing & Compliance', href: '/compliance' },
    { label: 'Contact', href: '/contact' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transform-gpu"
      style={{
        backgroundColor: useTransform(bgOpacity, v => `rgba(10, 14, 26, ${v})`),
        backdropFilter: useTransform(blurValue, v => `blur(${v}px)`),
        WebkitBackdropFilter: useTransform(blurValue, v => `blur(${v}px)`),
        borderBottom: useTransform(borderOpacity, v => `1px solid rgba(201, 168, 76, ${v})`)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center" data-cursor="hover">
            <Image
              src="/logo.png"
              alt="Euro Pet Express"
              width={160}
              height={60}
              priority={true}
              className="object-contain h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <motion.nav 
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-2"
          >
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              
              return (
                <motion.div key={link.href} variants={fadeUpFastVariant}>
                  <Link
                    href={link.href}
                    data-cursor="hover"
                    className={`relative text-[11px] font-medium uppercase tracking-wider px-3 py-2 rounded transition-colors block group ${isActive ? 'text-brand-gold' : 'text-gray-300 hover:text-white'}`}
                  >
                    {link.label}
                    <motion.div 
                      className="absolute bottom-0 left-3 right-3 h-[1px] bg-brand-gold origin-left"
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: easeOutExpo }}
                      style={{ transformOrigin: isActive ? 'left' : 'right' }}
                    />
                  </Link>
                </motion.div>
              )
            })}
            <motion.div variants={fadeUpFastVariant} className="ml-2">
              <MagneticButton>
                <Link href="/contact" data-cursor="hover" className="block bg-brand-gold text-navy font-bold text-xs px-5 py-2.5 rounded hover:bg-gold-light transition-colors uppercase tracking-wider shadow-sm">
                  REQUEST QUOTE
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.nav>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="lg:hidden bg-navy/95 backdrop-blur-xl border-t border-brand-gold/10 overflow-hidden"
          >
            <motion.div 
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              className="px-4 py-6 space-y-2"
            >
              {links.map(link => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <motion.div key={link.href} variants={fadeUpFastVariant}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-2 border-b border-white/5 text-sm uppercase tracking-wider font-medium ${isActive ? 'text-brand-gold' : 'text-gray-300'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div variants={fadeUpFastVariant} className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-brand-gold text-navy font-bold text-sm px-5 py-3 rounded text-center uppercase tracking-wider"
                >
                  REQUEST QUOTE
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
