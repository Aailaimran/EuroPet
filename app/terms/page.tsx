import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service | Euro Pet Express',
  description: 'Read the terms that apply when using the Euro Pet Express website and booking transport services.',
}

const sections = [
  {
    title: '1. Using the Website',
    text: 'By using this website, you agree to use it lawfully and not to interfere with its security, availability, or integrity.',
  },
  {
    title: '2. Quotes and Bookings',
    text: 'Any quote provided is an invitation to proceed, not a binding contract, until a booking has been confirmed in writing.',
  },
  {
    title: '3. Customer Information',
    text: 'You are responsible for providing accurate contact details, pet information, documentation, and travel preferences.',
  },
  {
    title: '4. Service Limitations',
    text: 'Journey times are estimates. Delays may occur because of traffic, border controls, weather, or animal welfare requirements.',
  },
  {
    title: '5. Liability',
    text: 'We operate with care and compliance, but our liability is limited to the extent permitted by law and the agreed booking terms.',
  },
  {
    title: '6. Contact',
    text: 'If you have any questions about these terms, please contact us using the details below.',
  },
]

export default function TermsPage() {
  return (
    <div>
      <PageHero title="Terms of Service" subtitle="The basic terms that apply when using the Euro Pet Express website and services." />

      <section className="bg-off-white py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(10,22,40,0.05)]">
              <h2 className="mb-3 font-display text-xl font-bold text-navy">{section.title}</h2>
              <div className="mb-4 h-0.5 w-10 bg-brand-gold" />
              <p className="text-sm leading-relaxed text-gray-700">{section.text}</p>
            </article>
          ))}

          <div className="mt-8 rounded-2xl bg-navy p-8 text-white">
            <h2 className="mb-3 font-display text-2xl font-bold">Contact Us</h2>
            <p className="mb-5 text-sm text-gray-300">
              Questions about these terms or your booking? Reach out and we will respond promptly.
            </p>
            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <a href="mailto:info@europetexpress.co.uk" className="text-brand-gold hover:underline">info@europetexpress.co.uk</a>
              <a href="tel:+447853147342" className="text-brand-gold hover:underline">+44 7853 147342</a>
              <Link href="/contact" className="text-brand-gold hover:underline">Request a quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}