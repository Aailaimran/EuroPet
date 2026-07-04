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

  // Prevent background body scroll on iOS when mobile menu is open.
  // On iOS, position: fixed is the only reliable way to lock scroll.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [open])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform-gpu ${scrolled
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
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full transition-all duration-500 ease-in-out ${scrolled
          ? 'h-16 md:h-20 lg:h-[90px]'
          : 'h-20 md:h-28 lg:h-[125px]'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center relative z-50" data-cursor="hover">
          <div className="relative flex items-center">
            {/* Absolute container that allows the logo to scale and breathe (and potentially hang slightly below the navbar) */}
            <div
              className={`absolute left-0 transition-all duration-500 ease-in-out ${scrolled
                ? 'w-[75px] md:w-[96px] lg:w-[114px] xl:w-[126px] h-[75px] md:h-[96px] lg:h-[114px] xl:h-[126px]'
                : 'w-[87px] md:w-[120px] lg:w-[147px] xl:w-[165px] h-[87px] md:h-[120px] lg:h-[147px] xl:h-[165px]'
                }`}
            >
              <Image
                src="/UpdatedLogo.png"
                alt="Euro Pet Express"
                fill
                priority={true}
                quality={100}
                className="object-contain object-left"
                sizes="(max-width: 640px) 87px, (max-width: 768px) 120px, (max-width: 1024px) 147px, 165px"
              />
            </div>
            {/* Layout Spacer: keeps the width reserved in the flex layout */}
            <div
              className={`transition-all duration-500 ease-in-out h-px ${scrolled
                ? 'w-[75px] md:w-[96px] lg:w-[114px] xl:w-[126px]'
                : 'w-[87px] md:w-[120px] lg:w-[147px] xl:w-[165px]'
                }`}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-1 xl:gap-3"
        >
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))

            return (
              <motion.div key={link.href} variants={fadeUpFastVariant}>
                <Link
                  href={link.href}
                  data-cursor="hover"
                  className={`relative text-[11px] xl:text-xs font-semibold uppercase tracking-wider px-2 xl:px-3 py-2 rounded transition-colors duration-200 block group ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                    }`}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-2 xl:left-3 right-2 xl:right-3 h-[1px] bg-brand-gold origin-left"
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
          <motion.div variants={fadeUpFastVariant} className="ml-1 xl:ml-2">
            <MagneticButton>
              <Link
                href="/contact"
                data-cursor="hover"
                className="block bg-brand-gold text-brand-dark font-bold text-[10px] xl:text-xs px-4 xl:px-5 py-2.5 rounded hover:bg-gold-hover transition-colors uppercase tracking-wider shadow-sm"
              >
                REQUEST QUOTE
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.nav>

        {/* Mobile Toggle — iOS tap fix: explicit min size, touch-action, no tap highlight */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 relative z-50"
          style={{
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* mode="wait" prevents overlapping enter/exit animations that can block iOS touch events */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden bg-brand-dark border-t border-brand-gold/10 overflow-hidden overflow-y-auto absolute top-full left-0 right-0 w-full max-h-[calc(100vh-80px)]"
            style={{
              WebkitOverflowScrolling: 'touch',
              overflowY: 'auto',
              maxHeight: '80vh',
              touchAction: 'pan-y',
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
