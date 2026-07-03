import { Hero } from '@/components/Hero'
import { BrandMarquee } from '@/components/BrandMarquee'
import { ProductCard } from '@/components/ProductCard'

export default function Home() {
  const featuredProducts = [
    { name: "Kyo Majime' Toner", price: "12.86", category: "Hair Color", image: "https://www.eliteprofessionaluae.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-26-at-4.28.13-PM-300x300.jpeg" },
    { name: "DAILY CHAE Showerhead", price: "136.13", category: "Wellness", image: "https://www.eliteprofessionaluae.com/wp-content/uploads/2025/10/8447516b-d309-43ad-b4c2-7e24b6deff5f-600x679.jpg" },
    { name: "Kyo Intense Care Kit", price: "58.32", category: "Hair Care", image: "https://images.unsplash.com/photo-1527799858573-03042468393a?q=80&w=600&auto=format&fit=crop" },
    { name: "3ME Braziker 2.0", price: "285.87", category: "Treatment", image: "https://images.unsplash.com/photo-1522337360788-8b13df772ce1?q=80&w=600&auto=format&fit=crop" }
  ]

  return (
    <main className="min-h-screen">
      <Hero />
      <BrandMarquee />

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-label-caps text-gold tracking-widest mb-4">CURATED SELECTION</h2>
            <h3 className="text-4xl md:text-5xl font-display text-on-surface">The Elite Collection</h3>
          </div>
          <button className="text-sm font-label-caps text-on-surface-variant hover:text-gold transition-colors border-b border-outline-variant/30 pb-1">
            VIEW ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="bg-surface-dim py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rim-light overflow-hidden">
             <img
               src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               alt="Professional Salon"
             />
          </div>
          <div>
            <h2 className="text-sm font-label-caps text-gold tracking-widest mb-6 uppercase">Our Philosophy</h2>
            <h3 className="text-5xl font-display text-on-surface mb-8 leading-tight">Uplifting UAE's Hair Artistry Since 2001</h3>
            <p className="text-lg font-body text-on-surface-variant mb-10 leading-relaxed">
              We combine attractiveness and individuality with user friendliness and cost efficiency products. Relentlessly, we develop new ideas and technologies to maintain the point of concept.
            </p>
            <button className="px-8 py-3 border border-gold text-gold font-label-caps tracking-widest hover:bg-gold hover:text-onyx transition-all duration-300">
              LEARN OUR STORY
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
