import PageHero from '@/components/ui/PageHero'

export default function Compliance() {
  return (
    <div>
      <PageHero title="Licensing & Compliance" subtitle="Fully authorised. Fully regulated. Fully transparent." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white border-l-4 border-gold rounded-xl p-6">
            <h4 className="font-display text-xl font-bold text-navy">DEFRA Type 2 Authorised Transporter</h4>
            <div className="text-sm text-gray-700 mt-2">Authorisation No: AT/2025/12345</div>
            <p className="text-gray-600 mt-3">DEFRA Type 2 authorisation is required by UK law for any commercial transport of animals on journeys exceeding 65km. Euro Pet Express holds full Type 2 authorisation, which requires a Certificate of Competence for the driver and a Vehicle Approval Certificate.</p>
            <p className="text-gray-600 mt-2">What this means for your dog: legally compliant long-distance transport, driver trained in animal welfare.</p>
          </div>

          <div className="bg-white border-l-4 border-gold rounded-xl p-6">
            <h4 className="font-display text-xl font-bold text-navy">TRACES NT Registration</h4>
            <p className="text-gray-600 mt-2">TRACES (Trade Control and Expert System) is the EU&apos;s online system for tracking animal movements. Our NT registration means all our movements are logged with authorities in both the EU and UK, ensuring full traceability of every animal we transport.</p>
          </div>

          <div className="bg-white border-l-4 border-gold rounded-xl p-6">
            <h4 className="font-display text-xl font-bold text-navy">Animal Welfare Transport Regulation Compliance</h4>
            <p className="text-gray-600 mt-2">We operate under both UK Regulation (EC) 1/2005 on the protection of animals during transport and the equivalent retained UK legislation. This covers journey planning, welfare inspection stops, vehicle standards, and driver competency.</p>
          </div>

          <div className="bg-white border-l-4 border-gold rounded-xl p-6">
            <h4 className="font-display text-xl font-bold text-navy">Eurotunnel Calais–Folkestone Authorised Route</h4>
            <p className="text-gray-600 mt-2">All our UK-bound journeys transit via the Eurotunnel Le Shuttle from Calais to Folkestone. This reduces overall journey time compared to ferry crossings and avoids the stress of open-sea travel.</p>
          </div>

          <div id="welfare" className="bg-navy p-10 rounded-xl text-white">
            <h3 className="font-display text-2xl font-bold mb-4">Our Animal Welfare Policy</h3>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>Euro Pet Express adheres to strict maximum journey times and ensures that all movements are planned to prioritise animal welfare at all times.</p>
              <p>Vehicles are fitted with climate control systems to maintain appropriate temperatures throughout the journey, and crate sizes are chosen to meet IATA and DEFRA guidance.</p>
              <p>Welfare stops are scheduled regularly to allow for hydration, comfort checks and, where necessary, brief periods outside the crate under supervision.</p>
              <p>Feeding is carried out only when appropriate for the animal&apos;s welfare and in accordance with veterinary guidance to minimise travel sickness or distress.</p>
              <p>All crates are secured to prevent movement during transit and are regularly inspected and cleaned between journeys.</p>
              <p>Drivers hold certificates of competence in animal transport and are trained in welfare inspection procedures and emergency handling.</p>
              <p>In the event of a veterinary emergency, we follow a defined protocol to obtain immediate veterinary assistance and notify relevant authorities where required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
