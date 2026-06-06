import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(margin = '0px 0px -50px 0px', amount = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: amount as any, // 'any' used here as framer-motion 'amount' types can be strict
    margin: margin as any,
  })

  return { ref, isInView }
}
