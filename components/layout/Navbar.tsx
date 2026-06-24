'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { easeOutExpo, staggerContainerVariant, fadeUpFastVariant } from '@/lib/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Routes & Schedule', href: '/routes' },
    { label: 'Our Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Licensing & Compliance', href: '/compliance' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 transform-gpu ${
        scrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 w-full ${
        scrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
      }`}>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" data-cursor="hover">
          <Image
            src="/logo.png"
            alt="Euro Pet Express"
            width={180}
            height={120}
            priority={true}
            className="object-contain w-auto h-[65px] md:h-[75px] lg:h-[85px]"
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
                  className={`relative text-xs font-medium uppercase tracking-wider px-3 py-2 rounded transition-colors duration-200 block group ${
                    isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                  }`}
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
              <Link
                href="/contact"
                data-cursor="hover"
                className="block bg-brand-gold text-brand-dark font-bold text-xs px-5 py-2.5 rounded hover:bg-gold-hover transition-colors uppercase tracking-wider shadow-sm"
              >
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="lg:hidden bg-brand-dark border-t border-brand-gold/10 overflow-hidden absolute top-full left-0 right-0 w-full"
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
                      className={`block py-3 px-2 border-b border-white/10 text-sm uppercase tracking-wider font-medium transition-colors ${
                        isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div variants={fadeUpFastVariant} className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-brand-gold text-brand-dark font-bold text-sm px-5 py-3 rounded text-center uppercase tracking-wider hover:bg-gold-hover transition-colors"
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
