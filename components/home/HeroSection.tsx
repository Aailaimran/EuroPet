import Link from 'next/link'
import { ShieldCheck, Clock } from 'lucide-react'

const badges = [
  'DEFRA Type 2\nAuthorised',
  'TRACES\nRegistered',
  '18-Crate\nVehicle',
  'Scheduled Eastern\nEurope Routes',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-24 pt-32">

          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-gold/30 px-4 py-1.5 rounded-full">
              DEFRA Authorised Transport
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-2 text-white">
              Premium Dog Transport
            </h1>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-gold">
              Between the UK and Europe
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              DEFRA authorised long-distance journeys supporting rescues, breeders, shelters and private owners across Romania, Poland and Bulgaria.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {badges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 p-3 rounded-lg border border-navy-border bg-navy-light/50">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white text-[10px] font-medium leading-tight whitespace-pre-line">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-gold text-navy font-bold px-8 py-4 rounded hover:bg-gold-light transition-all hover:scale-[1.02] uppercase tracking-wider text-sm text-center">
                REQUEST TRANSPORT QUOTE 🐾
              </Link>
              <Link href="/routes" className="border-2 border-white/30 text-white px-8 py-4 rounded hover:bg-white/10 transition-all hover:scale-[1.02] uppercase tracking-wider text-sm text-center">
                VIEW UPCOMING ROUTES
              </Link>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-6">
              <Clock className="w-4 h-4" />
              Typical response time: within 12–24 hours
            </div>
          </div>

          {/* Right: Image frame */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl border-2 border-gold/20 overflow-hidden bg-navy-light">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm italic">
                Dogs safely transported in individual crates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
