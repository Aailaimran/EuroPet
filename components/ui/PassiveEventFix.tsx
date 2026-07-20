'use client'
import { useEffect } from 'react'

/**
 * PassiveEventFix — iOS Safari Scroll Blocking Fix
 *
 * Non-passive touch/wheel event listeners block iOS Safari's scroll thread,
 * causing the entire page to freeze mid-interaction.
 *
 * This component patches EventTarget.prototype.addEventListener to automatically
 * add passive: true for touchstart, touchmove, wheel, and mousewheel events,
 * which is REQUIRED for iOS scroll performance.
 *
 * Must be rendered before any other components in the layout body.
 */
export default function PassiveEventFix() {
  useEffect(() => {
    const originalAddEventListener = EventTarget.prototype.addEventListener

    EventTarget.prototype.addEventListener = function (
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) {
      let opts = options

      // These event types MUST be passive on iOS to prevent scroll blocking.
      // If they are not passive, Safari holds the main thread until the handler
      // returns, which causes visible freezing.
      // Force passive: true for touchstart/touchmove to prevent scroll blocking on iOS.
      // Do NOT force passive: true for wheel/mousewheel, so Lenis can intercept and smooth scrolling on desktop.
      if (
        type === 'touchstart' ||
        type === 'touchmove'
      ) {
        if (typeof opts === 'object' && opts !== null) {
          // Preserve all other options, just force passive: true
          opts = { ...opts, passive: true }
        } else if (opts === undefined || opts === false || opts === true) {
          // If options was a boolean capture flag or undefined, wrap as object
          opts = {
            passive: true,
            capture: opts === true ? true : false,
          }
        }
      }

      return originalAddEventListener.call(this, type, listener, opts)
    }

    return () => {
      // Restore original on unmount (important for Next.js dev mode HMR)
      EventTarget.prototype.addEventListener = originalAddEventListener
    }
  }, [])

  return null
}
