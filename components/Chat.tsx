'use client'
import { useState } from 'react'
import { MessageCircle, X, Sparkles, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Chat Component
function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    
    const newUserMessage = { role: 'user', content: input }
    const updatedMessages = [...messages, newUserMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      })
      
      if (!res.ok) {
        throw new Error('Failed to send message')
      }
      
      const data = await res.json()
      const reply = { role: 'assistant', content: data.message }
      setMessages([...updatedMessages, reply])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }
      setMessages([...updatedMessages, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e : any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' }])
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl shadow-lg backdrop-blur-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white ml-8'
                    : 'bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-slate-100 mr-8 border border-slate-600/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {msg.role === 'assistant' && (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="flex-shrink-0 mt-1"
                    >
                      <Sparkles className="w-4 h-4 text-violet-400" />
                    </motion.div>
                  )}
                  <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Typing Indicator */}
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm border border-slate-600/50 px-5 py-4 rounded-2xl mr-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="w-2 h-2 bg-violet-400 rounded-full"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-300">Thinking...</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-slate-700/50 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              disabled={loading}
              className="w-full px-5 py-4 bg-slate-800/80 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200 backdrop-blur-sm text-sm leading-relaxed"
              rows={2}
              style={{ minHeight: '56px', maxHeight: '120px' }}
            />
          </div>
          <motion.button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-500/50 flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </motion.button>
          <motion.button
            onClick={clearChat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-4 bg-slate-700/80 hover:bg-slate-600/80 text-slate-300 rounded-xl transition-all duration-200 backdrop-blur-sm border border-slate-600/50 font-medium"
          >
            Clear
          </motion.button>
        </div>
      </div>
    </div>
  )
}

// Main ChatWidget Component
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(prev => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-violet-500/30"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-md -z-10"
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulse effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={false}
            whileHover={{ scale: [1, 1.5], opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>

      {/* Centered Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              {/* Chat Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ 
                  duration: 0.4, 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300 
                }}
                className="w-full max-w-4xl h-[80vh] max-h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border-b border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">Webloom AI Assistant</h3>
                      <p className="text-sm text-violet-400">Your intelligent conversation partner</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 text-slate-400 hover:text-slate-200 rounded-full hover:bg-slate-700/50 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Chat Content */}
                <div className="h-[calc(100%-100px)]">
                  <Chat />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}