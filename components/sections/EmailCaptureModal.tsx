'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Log for now as requested
    console.log('Email captured:', email);
    
    setSubmitted(true);
    
    // Optional: reset after a delay or let them close it
    setTimeout(() => {
      onClose();
      // Reset state after closing animation
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 300);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] px-4"
          >
            <div className="bg-[#11152B] border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden relative">
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
              
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                {!submitted ? (
                  <>
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                      <span className="font-bold text-primary text-xl">C</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      Get early access
                    </h3>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                      Cabin isn't public yet. Leave your email and we'll notify you the moment we open up to new founders.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="founder@startup.com"
                          required
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-glow hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#11152B]"
                      >
                        Notify Me
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="text-success w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      You're on the list.
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We'll be in touch soon.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
