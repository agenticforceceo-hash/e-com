import { ProductCard } from '@/components/ProductCard'

export default function Shop() {
  const products = [
    { name: "Kyo Majime' Toner", price: "12.86", category: "Hair Color", image: "https://www.eliteprofessionaluae.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-26-at-4.28.13-PM-300x300.jpeg" },
    { name: "DAILY CHAE Showerhead", price: "136.13", category: "Wellness", image: "https://www.eliteprofessionaluae.com/wp-content/uploads/2025/10/8447516b-d309-43ad-b4c2-7e24b6deff5f-600x679.jpg" },
    // More products can be added here
  ]

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto flex gap-12">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <h2 className="text-xs font-label-caps text-gold tracking-widest mb-8">REFINE BY</h2>

        <div className="space-y-12">
          <section>
            <h3 className="text-sm font-display text-on-surface mb-4 uppercase">Category</h3>
            <ul className="space-y-2 text-sm font-body text-on-surface-variant">
              <li className="hover:text-gold cursor-pointer transition-colors">Hair Care</li>
              <li className="hover:text-gold cursor-pointer transition-colors text-gold">Hair Color</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Skin Care</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Electronics</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-display text-on-surface mb-4 uppercase">Brand</h3>
            <ul className="space-y-2 text-sm font-body text-on-surface-variant">
              <li className="hover:text-gold cursor-pointer transition-colors">KYO</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Freelimix</li>
              <li className="hover:text-gold cursor-pointer transition-colors">3ME Maestri</li>
            </ul>
          </section>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-display text-on-surface tracking-wide uppercase">The Collection</h1>
          <span className="text-xs font-body text-on-surface-variant uppercase tracking-widest">Showing {products.length} Products</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </main>
    </div>
  )
}
