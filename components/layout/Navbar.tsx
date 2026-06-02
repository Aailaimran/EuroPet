'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Routes & Schedule', href: '/routes' },
    { label: 'Our Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Licensing & Compliance', href: '/compliance' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-navy/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
              <span className="text-lg">🐾</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-gold font-bold text-lg tracking-widest">EURO PET</div>
              <div className="text-white text-[10px] tracking-widest">— EXPRESS —</div>
              <div className="text-[8px] text-gray-400 uppercase tracking-wider">PREMIUM DOG TRANSPORT ACROSS EUROPE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-wider text-gray-300 hover:text-gold px-3 py-2 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3 bg-gold text-navy font-bold text-xs px-5 py-2.5 rounded hover:bg-gold-light transition-all hover:scale-105">
              REQUEST QUOTE 🐾
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-navy border-t border-navy-border">
          <div className="px-4 py-4 space-y-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-gray-300 hover:text-gold border-b border-navy-border/50 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-4 bg-gold text-navy font-bold text-sm px-5 py-3 rounded text-center"
            >
              REQUEST QUOTE 🐾
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
