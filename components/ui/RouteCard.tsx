'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface RouteCardProps {
  flag: string;
  title: string;
  subtitle: string;
  cities: string;
  buttonText: string;
  href: string;
  image: string;
  index: number;
}

export default function RouteCard({ flag, title, subtitle, cities, buttonText, href, image, index }: RouteCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full"
    >
      <div className="h-[200px] rounded-t-xl overflow-hidden relative bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          {flag}
        </div>
        {/* Placeholder banner image */}
        <div className="w-full h-full bg-gradient-to-br from-navy/80 to-navy-border/80 flex items-center justify-center text-white/50 text-xs">
          [Banner Image]
        </div>
      </div>
      <div className="bg-white rounded-b-xl border border-gray-200 shadow-sm p-6 flex flex-col flex-1">
        <h3 className="font-bold text-navy uppercase tracking-wide text-lg">{title}</h3>
        <div className="text-gold font-semibold text-sm mt-1">{subtitle}</div>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed whitespace-pre-line flex-1">
          {cities.replace(' • ', '\n')}
        </p>
        <Link href={href} className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all rounded mt-4 py-3 text-sm font-semibold tracking-wide text-center block">
          {buttonText}
        </Link>
      </div>
    </motion.div>
  )
}
