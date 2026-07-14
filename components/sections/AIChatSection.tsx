'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant } from '@/lib/utils';
import { Check, Cloud, Code, Briefcase, MoreHorizontal, ArrowRight, Mic } from 'lucide-react';

export function AIChatSection() {
  const [step, setStep] = useState(0);

  const handleCategoryClick = () => {
    if (step === 0) setStep(1);
  };

  const resetDemo = () => {
    setStep(0);
  };

  return (
    <section className="py-24 bg-background/50 border-y border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-extrabold uppercase tracking-widest mb-6">
              Autopilot mode
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Talk to your finances.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cabin categorizes transactions, spots anomalies, and models runway impacts automatically. Just answer simple questions to keep your books perfect.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Automated transaction categorization', 'Real-time runway impact modeling', 'Proactive burn rate alerts'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={resetDemo} 
              className="text-primary hover:text-white transition-colors text-sm font-bold flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              Reset Demo <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Chat UI */}
          <div className="bg-card border border-white/10 rounded-[32px] shadow-2xl p-6 md:p-8">
            {/* Chat Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
              <div className="w-12 h-12 bg-primary rounded-2xl rotate-3 flex items-center justify-center shadow-glow">
                <span className="font-bold text-white text-xl -rotate-3">C</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Cabin AI <span className="text-primary ml-1">✓</span></h3>
                <p className="text-muted-foreground text-xs font-medium">Your AI CFO</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-6 min-h-[360px]">
              
              {/* Message 1: AI Question */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-glow mt-1">
                  <span className="font-bold text-white text-xs">C</span>
                </div>
                <div>
                  <div className="bg-white text-background p-4 rounded-2xl rounded-tl-sm text-sm font-medium shadow-md">
                    <p>You spent <span className="font-bold">₦180,000</span> on <span className="font-bold">AWS</span> today.</p>
                    <p className="mt-2">What category should I use?</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button 
                      onClick={handleCategoryClick} 
                      disabled={step > 0} 
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        step > 0 
                          ? 'bg-white/5 text-muted-foreground border border-transparent cursor-not-allowed' 
                          : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50'
                      }`}
                    >
                      <Cloud size={12} /> Hosting
                    </button>
                    <button disabled className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground text-xs font-semibold cursor-not-allowed border border-white/5">
                      <Code size={12} /> Software
                    </button>
                    <button disabled className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground text-xs font-semibold cursor-not-allowed border border-white/5">
                      <Briefcase size={12} /> Operations
                    </button>
                    <button disabled className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground text-xs font-semibold cursor-not-allowed border border-white/5">
                      <MoreHorizontal size={12} /> Other
                    </button>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {step > 0 && (
                  <>
                    {/* Message 2: User Reply */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, transformOrigin: 'right center' }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex gap-4 justify-end"
                    >
                      <div className="bg-primary text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm font-bold shadow-glow">
                        Hosting
                      </div>
                    </motion.div>

                    {/* Message 3: AI Confirmation */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.4 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-glow mt-1">
                        <span className="font-bold text-white text-xs">C</span>
                      </div>
                      <div className="space-y-3 w-full">
                        <div className="bg-white text-background p-4 rounded-2xl rounded-tl-sm text-sm font-medium shadow-md flex items-center justify-between gap-4">
                          <span>Done. I've categorized this as <strong>Hosting</strong>.</span>
                          <div className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        </div>
                        
                        {/* Runway Impact Mini-Card */}
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ delay: 0.8 }}
                          className="bg-white/5 border border-white/10 p-4 rounded-xl text-sm overflow-hidden"
                        >
                          <p className="text-muted-foreground mb-2 text-[10px] uppercase tracking-wider font-bold">Runway Impact</p>
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">Your runway increased from <span className="text-muted-foreground line-through decoration-white/30 mr-1">8.2</span> to <strong className="text-white">8.4 months</strong>.</span>
                            <div className="bg-success/20 p-1.5 rounded-full text-success">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

            </div>
            
            {/* Chat Input Placeholder */}
            <div className="mt-8 flex items-center gap-3 bg-background/50 border border-white/10 rounded-full px-5 py-3">
              <span className="text-muted-foreground/50 text-sm flex-1 font-medium">Ask Cabin anything...</span>
              <button 
                className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Voice input placeholder"
                disabled
              >
                <Mic size={16} />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
