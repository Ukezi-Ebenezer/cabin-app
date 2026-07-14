'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/utils';

export function FinalCTA() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-16 h-16 mb-8 bg-primary rounded-2xl rotate-12 flex items-center justify-center shadow-glow">
            <span className="font-bold text-white text-3xl -rotate-12">C</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Your finance team.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Now powered by AI.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl">
            Join hundreds of hypergrowth founders who have put their startup's finances on autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary rounded-2xl font-bold text-xl text-white transition-all duration-300 hover:-translate-y-1 shadow-glow hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Start Free
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-white/10 rounded-2xl font-bold text-xl text-white bg-white/5 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Book Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
