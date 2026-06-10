import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Phone, Lock, Eye, Database, Globe, UserCheck, Clock, FileText, AlertTriangle, RefreshCw, Scale, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Euro Pet Express',
  description: 'Read about how Euro Pet Express collects, uses, and protects your personal data. GDPR compliant privacy practices.',
}

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    icon: <FileText className="w-5 h-5" />,
    content: `Euro Pet Express ("we", "our", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use our website (euro-pet.vercel.app) or our pet transport services. We operate in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and applicable EU data protection laws.`,
  },
  {
    id: 'data-controller',
    title: '2. Data Controller',
    icon: <UserCheck className="w-5 h-5" />,
    content: `Euro Pet Express is the data controller for the personal data we collect. If you have any questions about how we handle your data, please contact us at info@europetsexpress.com or by phone at +44 7711 123456.`,
  },
  {
    id: 'data-we-collect',
    title: '3. Data We Collect',
    icon: <Database className="w-5 h-5" />,
    content: `We may collect the following types of personal information:\n\n• **Contact information**: Your name, email address, phone number, and postal address.\n• **Pet information**: Your pet's name, breed, age, weight, microchip number, vaccination records, and health certificates.\n• **Transport details**: Pickup and delivery addresses, preferred dates, and route preferences.\n• **Payment information**: Billing details and transaction records (processed through secure third-party payment providers).\n• **Communication records**: Emails, WhatsApp messages, and phone call logs related to your booking.\n• **Website usage data**: IP address, browser type, pages visited, and cookies (see Section 10).`,
  },
  {
    id: 'how-we-use',
    title: '4. How We Use Your Data',
    icon: <Eye className="w-5 h-5" />,
    content: `We use your personal data for the following purposes:\n\n• **Service delivery**: To arrange and manage your pet's transport, including booking, route planning, and welfare updates.\n• **Legal compliance**: To comply with DEFRA regulations, TRACES NT documentation requirements, and EU/UK animal transport laws.\n• **Communication**: To send you booking confirmations, journey updates, welfare check photos, and respond to your enquiries.\n• **Service improvement**: To improve our routes, vehicle, and customer experience based on anonymised feedback.\n• **Safety**: To maintain records required for animal welfare inspections and regulatory audits.`,
  },
  {
    id: 'legal-basis',
    title: '5. Legal Basis for Processing',
    icon: <Scale className="w-5 h-5" />,
    content: `We process your data on the following legal bases under the UK GDPR:\n\n• **Contract performance** (Article 6(1)(b)): Processing necessary to fulfil our transport service agreement with you.\n• **Legal obligation** (Article 6(1)(c)): Processing required to comply with DEFRA, TRACES NT, and customs regulations.\n• **Legitimate interests** (Article 6(1)(f)): Processing for internal record-keeping, service improvement, and fraud prevention.\n• **Consent** (Article 6(1)(a)): Where you have given explicit consent, such as subscribing to our newsletter.`,
  },
  {
    id: 'data-sharing',
    title: '6. Who We Share Data With',
    icon: <Globe className="w-5 h-5" />,
    content: `We may share your personal data with:\n\n• **DEFRA and UK Border Force**: As required by law for animal import/export documentation.\n• **TRACES NT system**: The EU Trade Control and Expert System for recording animal movements.\n• **Veterinary authorities**: Official veterinarians in the UK and EU for health certification purposes.\n• **Email and communication providers**: EmailJS for form submissions; WhatsApp for journey updates.\n• **Website hosting**: Vercel for website hosting and analytics.\n\nWe do **not** sell your personal data to any third party for marketing purposes.`,
  },
  {
    id: 'data-retention',
    title: '7. How Long We Keep Your Data',
    icon: <Clock className="w-5 h-5" />,
    content: `We retain your personal data for the following periods:\n\n• **Transport records**: 5 years from the date of transport, as required by DEFRA regulations.\n• **Financial records**: 7 years, as required by UK tax law.\n• **Communication records**: 2 years from your last interaction with us.\n• **Website analytics**: 26 months (anonymised data only).\n\nAfter these periods, data is securely deleted or anonymised.`,
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    icon: <UserCheck className="w-5 h-5" />,
    content: `Under the UK GDPR, you have the following rights:\n\n• **Right of access**: Request a copy of the personal data we hold about you.\n• **Right to rectification**: Request correction of inaccurate or incomplete data.\n• **Right to erasure**: Request deletion of your data (subject to legal retention requirements).\n• **Right to restrict processing**: Request that we limit how we use your data.\n• **Right to data portability**: Request your data in a machine-readable format.\n• **Right to object**: Object to processing based on legitimate interests.\n• **Right to withdraw consent**: Where processing is based on consent, you can withdraw at any time.\n\nTo exercise any of these rights, please contact us at info@europetsexpress.com.`,
  },
  {
    id: 'data-security',
    title: '9. Data Security',
    icon: <Lock className="w-5 h-5" />,
    content: `We take appropriate technical and organisational measures to protect your personal data, including:\n\n• Encrypted data transmission (HTTPS/TLS) on our website.\n• Secure storage of physical and digital records.\n• Access controls limiting data access to authorised personnel only.\n• Regular review of our security practices.\n\nWhile we take every reasonable precaution, no method of internet transmission is 100% secure. We cannot guarantee absolute security of data transmitted to us online.`,
  },
  {
    id: 'cookies',
    title: '10. Cookies & Analytics',
    icon: <Eye className="w-5 h-5" />,
    content: `Our website uses essential cookies to ensure proper functionality. We may also use:\n\n• **Analytics cookies**: To understand how visitors use our site (e.g., page views, traffic sources). This data is anonymised.\n• **Functional cookies**: To remember your preferences and improve your experience.\n\nYou can control cookie settings through your browser. Disabling cookies may affect certain website features.`,
  },
  {
    id: 'international-transfers',
    title: '11. International Data Transfers',
    icon: <Globe className="w-5 h-5" />,
    content: `As our transport services operate between the UK and EU countries, your personal data may be transferred to and processed in EU member states. These transfers are protected by:\n\n• The UK's adequacy decision for EU data protection standards.\n• Standard Contractual Clauses (SCCs) where applicable.\n• Our internal data protection policies and procedures.`,
  },
  {
    id: 'children',
    title: '12. Children\'s Privacy',
    icon: <Shield className="w-5 h-5" />,
    content: `Our services are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will delete it.`,
  },
  {
    id: 'changes',
    title: '13. Changes to This Policy',
    icon: <RefreshCw className="w-5 h-5" />,
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.`,
  },
  {
    id: 'complaints',
    title: '14. Complaints',
    icon: <AlertTriangle className="w-5 h-5" />,
    content: `If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):\n\n• **Website**: ico.org.uk\n• **Phone**: 0303 123 1113\n• **Post**: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF`,
  },
]

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-navy py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">LEGAL</span>
          <h1 className="font-display text-white text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">Privacy Policy</h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            How Euro Pet Express collects, uses, and protects your personal information.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sticky sidebar TOC */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">Table of Contents</h3>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 hover:text-navy hover:translate-x-1 transition-all py-1.5 border-l-2 border-transparent hover:border-brand-gold pl-3"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-10">
              {/* Green callout */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-4">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">We never sell your data</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Euro Pet Express will never sell, rent, or trade your personal information to third parties for marketing purposes. Your data is only used to deliver our transport services and comply with legal requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
                <p className="font-semibold text-navy mb-2">Quick summary</p>
                <p>
                  We collect only the information needed to arrange safe transport, meet legal obligations, and keep you updated throughout the journey.
                </p>
              </div>

              {/* Sections */}
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-brand-gold">{s.icon}</div>
                    <h2 className="font-display text-xl text-navy font-bold">{s.title}</h2>
                  </div>
                  <div className="w-10 h-0.5 bg-brand-gold mb-4" />
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line prose prose-sm max-w-none">
                    {s.content.split('\n').map((line, i) => {
                      if (line.startsWith('• **')) {
                        const match = line.match(/• \*\*(.+?)\*\*:?\s*(.*)/)
                        if (match) {
                          return (
                            <p key={i} className="flex items-start gap-2 my-1.5">
                              <span className="text-brand-gold mt-0.5">•</span>
                              <span><strong className="text-navy">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ''}</span>
                            </p>
                          )
                        }
                      }
                      if (line.trim() === '') return <br key={i} />
                      return <p key={i} className="my-1">{line}</p>
                    })}
                  </div>
                </div>
              ))}

              {/* Contact Us block */}
              <div className="bg-navy rounded-xl p-8 text-white mt-8">
                <h3 className="font-display text-xl font-bold mb-4">Contact Us About Your Data</h3>
                <p className="text-gray-300 text-sm mb-6">
                  If you have any questions about this Privacy Policy or wish to exercise your data rights, please get in touch:
                </p>
                <div className="space-y-3">
                  <a href="mailto:info@europetsexpress.com" className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    info@europetsexpress.com
                  </a>
                  <a href="tel:+447711123456" className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    +44 7711 123456
                  </a>
                  <a href="https://wa.me/447853147342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-gold hover:underline text-sm font-medium">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
