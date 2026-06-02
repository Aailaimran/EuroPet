export default function TrustBar() {
  const certs = [
    { abbr: 'DEFRA', label: 'Department for Environment\nFood & Rural Affairs' },
    { abbr: 'NT', label: 'TRACES' },
    { abbr: '✓', label: 'Animal Welfare\nRegulation Compliant' },
    { abbr: '🚂', label: 'Eurotunnel\nCalais–Folkestone Route' },
  ]

  return (
    <section className="bg-navy border-y border-navy-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

          {/* Left text */}
          <div className="lg:w-[30%] flex items-center gap-3 text-center lg:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-lg">🐾</span>
                <span className="text-gold font-bold text-sm tracking-widest uppercase">
                  Safe. Compliant. Reliable.
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Every journey planned around welfare, comfort and trust.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-14 bg-navy-border" />

          {/* Certs */}
          <div className="lg:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-4">
            {certs.map((cert, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded border border-gold/30 flex items-center justify-center text-gold font-bold text-xs bg-navy-light/50">
                  {cert.abbr}
                </div>
                <span className="text-gray-400 text-[10px] leading-tight whitespace-pre-line">{cert.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
