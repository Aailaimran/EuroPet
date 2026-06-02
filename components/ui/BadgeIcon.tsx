import { ReactNode } from 'react'

export default function BadgeIcon({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center text-center text-white text-sm">
      <div className="mb-2">
        {icon}
      </div>
      <div className="font-bold">
        {label}
      </div>
    </div>
  )
}
