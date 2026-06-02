interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-navy py-20 md:py-28 pt-32 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-gray-500 text-xs tracking-wider mb-4">{breadcrumb || 'Home / ' + title}</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-gold text-lg mt-3 max-w-2xl">{subtitle}</p>
        <div className="w-16 h-0.5 bg-gold mt-6" />
      </div>
    </section>
  )
}
