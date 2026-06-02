import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import RoutesSection from '@/components/home/RoutesSection'
import VehicleSection from '@/components/home/VehicleSection'
import CtaStrip from '@/components/home/CtaStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <RoutesSection />
      <VehicleSection />
      <CtaStrip />
    </>
  )
}
