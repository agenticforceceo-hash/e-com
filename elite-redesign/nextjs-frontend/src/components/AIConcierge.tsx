"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Loader2 } from 'lucide-react'

const KNOWLEDGE_BASE = {
  "kyo": "KYO is our flagship brand from Italy, offering ammonia-free and PPD-free permanent hair colors enriched with Keratin and Marine Collagen.",
  "freelimix": "Freelimix provides professional multivitamin-based hair colors and intensive treatments for vibrant results.",
  "3me": "3ME Maestri is known for professional-grade brushes and technical salon equipment made in Italy.",
  "frizz": "For anti-frizz, we recommend the KYO Intensive Care range or Freelimix smoothing treatments.",
  "shipping": "We offer free delivery across all Emirates in the UAE for orders over 200 AED."
}

export const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Welcome to Elite Professional. I am your AI consultant. How can I help you elevate your salon artistry today?' }
  ])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI "Thinking"
    setTimeout(() => {
      let response = "I'm specializing in our professional brands like KYO and Freelimix. Could you please specify which brand or treatment you'd like to learn more about?"

      const query = userMsg.content.toLowerCase()
      if (query.includes('kyo')) response = KNOWLEDGE_BASE.kyo
      else if (query.includes('freelimix')) response = KNOWLEDGE_BASE.freelimix
      else if (query.includes('3me') || query.includes('brush')) response = KNOWLEDGE_BASE['3me']
      else if (query.includes('frizz')) response = KNOWLEDGE_BASE.frizz
      else if (query.includes('ship') || query.includes('delivery')) response = KNOWLEDGE_BASE.shipping

      setMessages(prev => [...prev, { role: 'ai', content: response }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-2xl"
        style={{ boxShadow: "0 0 15px rgba(233, 195, 73, 0.3)" }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(233, 195, 73, 0.5)" }}
        whileTap={{ scale: 0.9 }}
      >
        <Sparkles size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 z-50 w-80 md:w-96 h-[500px] bg-[#201f1f] border border-[#D4AF37]/20 flex flex-col shadow-2xl overflow-hidden rounded-sm"
          >
            <div className="p-4 border-b border-[#D4AF37]/10 flex justify-between items-center bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-display text-[#e5e2e1] uppercase tracking-widest">ELITE AI</h4>
                  <p className="text-[8px] text-[#D4AF37] uppercase tracking-[0.2em]">Professional Concierge</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#A0A0A0] hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-xs leading-relaxed ${
                    msg.role === 'user'
                    ? 'bg-[#D4AF37] text-[#0a0a0a] font-medium'
                    : 'bg-[#1c1b1b] text-[#e5e2e1] border border-[#D4AF37]/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1c1b1b] p-4 border border-[#D4AF37]/10">
                    <Loader2 size={14} className="animate-spin text-gold" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#0a0a0a] border-t border-[#D4AF37]/10">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="How can we assist you today?"
                  className="flex-1 bg-[#141313] border-none text-xs p-3 focus:ring-1 focus:ring-[#D4AF37] text-[#e5e2e1] placeholder:text-[#A0A0A0]/30"
                />
                <button type="submit" className="px-4 bg-[#D4AF37] text-[#0a0a0a] hover:bg-white transition-colors">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
