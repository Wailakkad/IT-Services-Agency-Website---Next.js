"use client"
// Main ChatWidget Component
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                damping: 20, 
                stiffness: 300 
              }}
              className="w-96 h-[600px] mb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-lg"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border-b border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-slate-100">Webloom AI</h3>
                    <p className="text-xs text-violet-400">Always here to help</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-slate-400 hover:text-slate-200 rounded-full hover:bg-slate-700/50 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Chat Content */}
              <div className="h-[calc(100%-80px)]">
                <Chat />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-violet-500/30"
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
  )
}