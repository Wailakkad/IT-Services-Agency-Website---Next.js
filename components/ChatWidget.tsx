'use client'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Chat from './Chat'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="w-80 max-h-[70vh] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-indigo-600 text-white">
              <p className="font-semibold">Webloom AI Assistant</p>
              <button onClick={() => setIsOpen(false)} className="text-sm hover:opacity-70">✕</button>
            </div>
            <div className="p-2 h-[60vh] overflow-y-auto bg-white">
              <Chat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Icon Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
