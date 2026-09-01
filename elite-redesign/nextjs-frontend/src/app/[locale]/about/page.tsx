import React from 'react'

export default function About() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <h2 className="text-sm font-label-caps text-gold tracking-[0.3em] mb-6 text-center">THE ELITE LEGACY</h2>
        <h1 className="text-6xl md:text-8xl font-display text-on-surface text-center leading-tight mb-12">
          Curating Excellence <br/> Since 2001
        </h1>
        <div className="aspect-video w-full rim-light overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Elite Salon"
          />
        </div>
      </section>

      {/* Editorial Content */}
      <section className="px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
        <div>
          <h3 className="text-3xl font-display text-on-surface mb-8">Our Journey</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            Since our establishment in 2001, Elite Professional has been dedicated to fusing unmatched cost-effectiveness with style, uniqueness, and usability.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            We began as a vision to provide the UAE's professional hair care market with products that don't just perform, but inspire. Today, we stand as a trusted partner for the region's most prestigious salons.
          </p>
        </div>
        <div className="pt-12">
          <div className="p-8 border border-gold/10 bg-surface-dim italic font-display text-xl text-gold relative">
            "Exclusivity is not a luxury, it is a prerequisite for excellence in our industry."
            <div className="absolute -top-4 -left-4 text-6xl text-gold/20">"</div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Innovative Products", desc: "Always ahead of the curve with the latest hair care technologies." },
            { title: "Affordable Elegance", desc: "Premium quality accessible to the elite professional." },
            { title: "Trusted Legacy", desc: "Over 20 years of excellence in the Middle Eastern market." }
          ].map((pillar, i) => (
            <div key={i} className="text-center p-10 border border-gold/5 bg-onyx transition-all hover:border-gold/20">
              <h4 className="text-xl font-display text-gold mb-4 uppercase tracking-widest">{pillar.title}</h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
