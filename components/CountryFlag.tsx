import React from 'react'
import { GB, RS, RO, HU, HR, FR, ES, DE, NL, CZ } from 'country-flag-icons/react/3x2'
import { Globe } from 'lucide-react'

const FLAGS: Record<string, React.ComponentType<{ className?: string; title?: string }>> = {
  GB, RS, RO, HU, HR, FR, ES, DE, NL, CZ
}

interface CountryFlagProps {
  countryCode: string;
  className?: string;
}

export default function CountryFlag({ countryCode, className = "w-10 h-auto" }: CountryFlagProps) {
  const Flag = FLAGS[countryCode]
  if (!Flag) return <Globe className={className} />
  return <Flag className={className} title={countryCode} />
}
