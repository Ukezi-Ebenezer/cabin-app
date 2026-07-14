'use client';

import { motion } from 'framer-motion';

function DashboardMockupPlaceholder() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto lg:ml-auto"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-card/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col z-10"
        role="img"
        aria-label="Dashboard Mockup Placeholder"
      >
        {/* Abstract shapes to look like a dashboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold mb-2">Projected Runway</div>
            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              19.4 <span className="text-xl md:text-2xl text-muted-foreground font-medium">months</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-success font-bold text-sm">+3.1m vs Q3</span>
            <div className="w-32 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
               <div className="h-full w-[70%] bg-success shadow-[0_0_10px_rgba(32,199,111,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Main Graph Area */}
        <div className="flex-1 flex items-end gap-2 md:gap-3 px-2 mt-4 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5"></div>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white/5"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white/5"></div>
          
          {[40, 55, 45, 65, 85, 100, 60].map((height, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              className={`flex-1 rounded-t-xl md:rounded-t-2xl relative group ${
                i === 5 
                  ? 'bg-gradient-to-t from-primary to-[#A081FF] shadow-glow z-10' 
                  : 'bg-gradient-to-t from-primary/20 to-primary/50'
              }`}
            >
              {i === 5 && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-background text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Peak Growth
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-12">
          <div className="bg-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/5">
            <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold">Burn Rate</div>
            <div className="text-lg md:text-xl font-bold mt-1 text-[#FF4D4D]">$42.5k</div>
          </div>
          <div className="bg-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/5">
            <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold">Gross Margin</div>
            <div className="text-lg md:text-xl font-bold mt-1 text-success">84.2%</div>
          </div>
          <div className="bg-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/5">
            <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold">SaaS Rule 40</div>
            <div className="text-lg md:text-xl font-bold mt-1 text-white">42.8</div>
          </div>
        </div>
        
        {/* Floating element */}
        <motion.div 
          animate={{ y: [0, 8, 0], rotate: [-2, 0, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 md:-bottom-6 right-4 md:right-8 bg-white p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 flex items-center gap-3 md:gap-4 z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <p className="text-background text-[10px] md:text-xs font-bold">AI Analysis Complete</p>
            <p className="text-background/60 text-[9px] md:text-[10px] font-medium leading-tight mt-0.5">
              Switch AWS to Reserved Instances<br />
              to save <span className="text-success font-bold">$1,204/mo</span>.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background glow effects */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/30 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-success/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
            >
              Meet your AI <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-primary">CFO.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              Track spending, analyze runway, and optimize expenses in real-time. Cabin connects to your bank, payroll, and cloud spend. No spreadsheets required.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-primary rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 shadow-glow hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Start Free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-2xl font-bold text-lg text-white bg-white/5 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Book Demo
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-[11px] text-muted-foreground/60 ml-1 mt-2"
            >
              Trusted by founders from <span className="text-white font-semibold">Sequoia</span>, <span className="text-white font-semibold">Y Combinator</span>, and <span className="text-white font-semibold">Index</span>.
            </motion.p>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <DashboardMockupPlaceholder />
          </div>

        </div>
      </div>
    </section>
  );
}
