"use client"
import React from 'react'
import { motion } from 'framer-motion'

const brands = ['KYO', 'Freelimix', '3ME MAESTRI', 'ARCOCERE', 'CINEMA', 'DR. KRAUT']

export const BrandMarquee = () => {
  return (
    <div className="bg-[#141313] py-12 border-y border-[#444748]/10 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display text-[#A0A0A0]/20 mx-12 tracking-widest uppercase">
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
