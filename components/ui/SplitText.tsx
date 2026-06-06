'use client'

import { motion } from 'framer-motion'
import { easeOutExpo } from '@/lib/motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export default function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const words = text.split(' ')

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{
              duration: 0.7,
              ease: easeOutExpo,
              delay: delay + i * 0.08,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}
