"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-jade to-teal rounded-full shadow-lg shadow-jade/30 flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-jade/40"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 bg-background-card rounded-2xl shadow-2xl shadow-jade/10 border border-jade/15 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-jade to-teal p-5">
              <h3 className="text-white font-semibold">
                Hi there! Need any help?
              </h3>
              <p className="text-white/90 text-sm mt-0.5">
                We typically reply within minutes
              </p>
            </div>

            {/* Messages */}
            <div className="h-64 p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-jade/5 border border-jade/10 rounded-xl rounded-tl-sm p-3 mb-3 max-w-[80%]"
              >
                <p className="text-sm text-text-secondary leading-relaxed">
                  Hello! How can we help you today? Feel free to ask about our
                  services, pricing, or anything else.
                </p>
              </motion.div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-jade/10"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white border border-jade/15 rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-jade/40 focus:bg-jade/5 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-r from-jade to-teal rounded-lg hover:shadow-lg hover:shadow-jade/25 transition-all duration-300 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
