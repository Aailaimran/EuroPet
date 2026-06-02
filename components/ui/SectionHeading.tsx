export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-navy text-3xl md:text-4xl uppercase tracking-wider mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 font-sans max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
