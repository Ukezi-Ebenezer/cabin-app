'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { EmailCaptureModal } from './EmailCaptureModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl rotate-12 flex items-center justify-center shadow-glow">
                <span className="font-bold text-white text-xl -rotate-12">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Cabin</span>
            </div>
            {/* Desktop Eyebrow Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
              WhatsApp-native finance
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">How It Works</a>
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Features</a>
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Pricing</a>
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={openModal} 
              className="text-sm font-medium text-muted-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors"
            >
              Login
            </button>
            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-muted-foreground mr-2">
                <ShieldCheck size={14} className="text-success" />
                <span>Bank-grade security</span>
              </div>
              <button 
                onClick={openModal}
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow-glow hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300"
              >
                Start Free
              </button>
            </div>
          </div>

          <button 
            className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 overflow-hidden"
            >
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-white">How It Works</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-white">Features</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-white">Pricing</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-white">FAQ</a>
              <hr className="border-white/5 my-2" />
              <button 
                onClick={openModal} 
                className="text-left text-sm font-medium text-muted-foreground hover:text-white"
              >
                Login
              </button>
              <button 
                onClick={openModal}
                className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold shadow-glow text-center"
              >
                Start Free
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground mt-2">
                <ShieldCheck size={14} className="text-success" />
                <span>Bank-grade security</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
