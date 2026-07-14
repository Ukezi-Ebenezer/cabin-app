'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';

export function FounderBenefits() {
  const benefits = [
    "Save hours every week on manual bookkeeping",
    "Know your exact runway instantly, any time",
    "Never miss unusual spending or duplicate charges",
    "Make investor-ready P&L reports with one click",
    "Get instant answers to complex financial questions"
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left: Illustration Placeholder */}
          <motion.div
            variants={fadeUpVariant}
            className="relative"
            role="img"
            aria-label="Abstract data visualization placeholder"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-4 bg-card border border-white/10 rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
                
                {/* Abstract Data Visualization */}
                <div className="relative w-full h-full p-8 flex flex-col justify-between">
                  <div className="flex gap-4 items-end h-1/2 border-b border-white/5 pb-4">
                    {[40, 70, 45, 90, 65, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/20 to-primary/60 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary/50 shadow-[0_0_10px_rgba(108,59,255,0.8)]"></div>
                      </div>
                    ))}
                  </div>
                  <div className="h-1/2 pt-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white/5 border-t-primary border-r-success rotate-45"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-white/5 border-l-blue-500 absolute mt-4 -rotate-12"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -right-8 top-1/4 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-success" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-bold">Books Closed</div>
                    <div className="text-sm font-bold text-white">0 hours spent</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits Checklist */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Focus on growth, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">we handle the numbers.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cabin replaces your outsourced bookkeeping firm and fragmented spreadsheets with an intelligent, always-on AI engine.
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUpVariant}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 shadow-glow">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <p className="text-white font-medium text-lg leading-snug">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
