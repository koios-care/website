'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        onClose();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all z-[101]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-0 top-0 text-warm-purple/60 hover:text-warm-purple"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-warm-purple mb-6">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-warm-purple mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-purple/20 focus:border-warm-purple focus:ring-1 focus:ring-warm-purple outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-purple mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-purple/20 focus:border-warm-purple focus:ring-1 focus:ring-warm-purple outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-purple mb-1">Company (Optional)</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-purple/20 focus:border-warm-purple focus:ring-1 focus:ring-warm-purple outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-purple mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-purple/20 focus:border-warm-purple focus:ring-1 focus:ring-warm-purple outline-none transition-colors min-h-[120px] resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-warm-purple text-white rounded-lg hover:bg-bubbly-pink transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 