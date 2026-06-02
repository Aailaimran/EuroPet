import { Shield } from 'lucide-react'

export default function TrustBadge({ icon, title, subtitle }){
  return (
    <div className="text-center">
      <div className="text-brand-gold w-8 h-8 mx-auto">{icon || <Shield />}</div>
      <div className="text-white text-sm font-semibold mt-2">{title}</div>
      <div className="text-gray-400 text-xs">{subtitle}</div>
    </div>
  )
}
