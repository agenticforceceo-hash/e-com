import React from 'react'

export default function Brands() {
  const brands = [
    { name: "KYO", desc: "Italian excellence in ammonia-free hair coloring.", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop" },
    { name: "Freelimix", desc: "Professional multivitamin hair care systems.", image: "https://images.unsplash.com/photo-1522337360788-8b13df772ce1?q=80&w=800&auto=format&fit=crop" },
    { name: "3ME Maestri", desc: "Legendary technical salon brushes and equipment.", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop" },
    { name: "Arcocere", desc: "The gold standard in Italian waxing technology.", image: "https://images.unsplash.com/photo-1570172619666-114317a402f1?q=80&w=800&auto=format&fit=crop" }
  ]

  return (
    <main className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-sm font-label-caps text-gold tracking-widest mb-4 uppercase text-center">Elite Partners</h2>
      <h1 className="text-5xl md:text-7xl font-display text-on-surface text-center mb-24">The Brands of Elite</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {brands.map((brand, i) => (
          <div key={i} className="group relative aspect-[16/9] overflow-hidden rim-light bg-surface-dim">
            <img src={brand.image} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <h2 className="text-4xl font-display text-on-surface mb-4 tracking-widest">{brand.name}</h2>
              <p className="max-w-xs text-sm font-body text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {brand.desc}
              </p>
              <div className="mt-8 w-12 h-px bg-gold group-hover:w-full transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
