"use client"
import React, { useState, useEffect } from 'react'
import { ShoppingBag, Globe, Menu, X } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState('EN')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'h-16 bg-onyx/90 backdrop-blur-xl border-b border-gold/10' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-on-surface">
          <Menu size={24} />
        </button>

        {/* Links - Left */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/shop" className="text-[10px] font-label-caps text-on-surface hover:text-gold tracking-[0.2em] transition-colors">SHOP</Link>
          <Link href="/brands" className="text-[10px] font-label-caps text-on-surface hover:text-gold tracking-[0.2em] transition-colors">BRANDS</Link>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-xl md:text-2xl font-display text-on-surface tracking-[0.3em] font-semibold">ELITE</span>
          <span className="text-[8px] font-label-caps text-gold tracking-[0.4em] -mt-1">PROFESSIONAL</span>
        </Link>

        {/* Actions - Right */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            className="flex items-center gap-2 text-[10px] font-label-caps text-on-surface-variant hover:text-gold transition-colors"
          >
            <Globe size={14} />
            <span className="mt-0.5">{lang}</span>
          </button>

          <button className="text-on-surface hover:text-gold transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full text-[7px] text-onyx flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
