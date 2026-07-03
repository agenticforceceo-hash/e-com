"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    )
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2000&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-display text-[#e5e2e1] mb-6 tracking-tight uppercase">
          Uplifting <span className="text-[#D4AF37] italic">Everyday</span> Luxury
        </h1>
        <p className="text-xl md:text-2xl font-body text-[#A0A0A0] max-w-2xl mx-auto mb-10 leading-relaxed">
          The UAE's premier destination for professional-grade hair care excellence since 2001.
        </p>
        <button className="px-10 py-4 bg-[#D4AF37] text-[#0a0a0a] font-label-caps tracking-widest hover:bg-white transition-colors duration-300 uppercase font-bold">
          SHOP THE COLLECTION
        </button>
      </div>
    </section>
  )
}
