// Server component wrapper — fetches siteSettings from Sanity and passes
// social links to the client-side FooterClient as props.

import { sanityFetch } from '@/sanity/sanity.client'
import { SITE_SETTINGS_QUERY } from '@/sanity/queries'
import FooterClient, { type SiteSettingsLinks } from './FooterClient'

export default async function Footer() {
  // Fetch live social/contact links from Sanity siteSettings document.
  // Falls back to empty object — FooterClient has hardcoded fallback URLs.
  let links: SiteSettingsLinks = {}
  try {
    const settings = await sanityFetch<Record<string, string>>(SITE_SETTINGS_QUERY)
    if (settings) {
      links = {
        facebookUrl: settings.facebookUrl,
        instagramUrl: settings.instagramUrl,
        tiktokUrl: settings.tiktokUrl,
        youtubeUrl: settings.youtubeUrl,
        whatsappNumber: settings.whatsappNumber,
      }
    }
  } catch (err) {
    // If Sanity is unavailable, FooterClient will use its hardcoded fallbacks
    console.warn('[Footer] Could not fetch siteSettings from Sanity:', err)
  }

  return <FooterClient links={links} />
}
