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
      setScrolled(window.scrollY > 50)
    }
    // passive: true is CRITICAL for iOS performance.
    // Without it, Safari holds the main thread during scroll,
    // causing page-wide freezing and unresponsive UI.
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Our Routes', href: '/routes' },
    { label: 'Our Services', href: '/services' },
    { label: 'Rescue a Dog', href: '/rescue' },
    { label: 'About Us', href: '/about' },
    { label: 'Licensing & Compliance', href: '/compliance' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background body scroll on Safari when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [open])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${scrolled
        ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10'
        : 'bg-transparent border-b border-transparent'
        }`}
      style={{
        // Force GPU compositing layer on iOS — prevents the navbar
        // from jumping/flickering during momentum scroll
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'transform',
        // Prevent iOS momentum scroll from affecting the fixed navbar
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full py-2">
        {/* LOGO — Scaled to show full circular illustration and tagline clearly */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center"
          data-cursor="hover"
        >
          <div 
            className="relative flex-shrink-0"
            style={{
              width: '130px',
              height: '90px',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <Image
              src="/UpdatedLogo.png"
              alt="Euro Pet Express"
              fill
              priority={true}
              quality={100}
              className="object-contain"
              style={{
                objectFit: 'contain',
                objectPosition: 'left center',
              }}
              sizes="130px"
            />
          </div>
        </Link>

        {/* DESKTOP NAV — hidden on mobile (below lg: 1024px) */}
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
                  className={`relative text-xs font-medium uppercase tracking-wider px-3 py-2 rounded transition-colors duration-200 block group ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
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

        {/* MOBILE HAMBURGER — hidden on desktop (lg:hidden), flex-shrink-0 keeps target stable */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setOpen(prev => !prev)
          }}
          className="lg:hidden flex items-center justify-center text-white flex-shrink-0 z-[60] relative"
          style={{
            minWidth: '44px',
            minHeight: '44px',
            padding: '10px',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 60,
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
          }}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open
            ? <X size={22} strokeWidth={2} />
            : <Menu size={22} strokeWidth={2} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.2,
              ease: 'easeOut'
            }}
            className="lg:hidden bg-brand-dark border-t border-brand-gold/10 absolute top-full left-0 right-0 w-full z-50"
            style={{
              WebkitOverflowScrolling: 'touch',
              overflowY: 'auto',
              maxHeight: '85vh',
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
          >
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              className="px-4 py-6 space-y-2"
            >
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <motion.div key={link.href} variants={fadeUpFastVariant}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-2 border-b border-white/10 text-sm uppercase tracking-wider font-medium transition-colors ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
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
