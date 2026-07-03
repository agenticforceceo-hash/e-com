"use client"
import React from 'react'
import { ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: string
  image: string
  category: string
}

export const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col bg-[#141313] border border-[#D4AF37]/5 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-label-caps text-[#D4AF37] tracking-[0.2em] mb-2 uppercase">{category}</span>
        <h4 className="text-xl font-display text-[#e5e2e1] mb-4 group-hover:text-[#D4AF37] transition-colors">{name}</h4>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm font-body text-[#A0A0A0] italic">{price} AED</span>
          <button className="p-2 rounded-full border border-[#444748]/30 text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 border transition-all duration-500 pointer-events-none"></div>
    </div>
  )
}
