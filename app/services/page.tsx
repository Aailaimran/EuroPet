import PageHero from '@/components/ui/PageHero'
import { Heart, Shield, Award, FileText } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Private Owner Transport',
      desc: "You're moving to the UK or reuniting with your dog. We provide door-to-door or collection-point transport for privately owned dogs with full welfare documentation support.",
      features: ['Flexible collection points', 'Welfare updates during journey', 'TRACES documentation support', 'Microchip & vaccination verification']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Rescue & Shelter Transport',
      desc: 'We work directly with registered rescue organisations to transport rehomed dogs from Eastern European shelters to their UK foster or forever homes.',
      features: ['Volume discount for registered rescues', 'Coordination with shelter staff', 'Full EU/UK import compliance', 'DEFRA-authorised journey documentation']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Breeder Transport',
      desc: 'Trusted by registered breeders across Romania and Poland to transport puppies and adult dogs to new owners in the UK safely and in compliance with all regulations.',
      features: ['Age-verified puppy transport (min. 15 weeks)', 'Health certificate coordination', 'Rabies titre test verification', 'Microchip & passport checking']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Documentation Assistance',
      desc: 'Navigating UK pet import rules post-Brexit is complex. We guide owners and organisations through the required paperwork.',
      features: ['TRACES NT movement document guidance', 'Health certificate requirements', 'Rabies vaccination timing', 'Tapeworm treatment guidance']
    }
  ]

  return (
    <div>
      <PageHero title="Our Services" subtitle="Tailored dog transport for rescues, breeders, shelters and private owners." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-gold">{s.icon}</div>
                <h4 className="font-display text-xl font-bold text-navy mt-4 mb-2">{s.title}</h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {s.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
