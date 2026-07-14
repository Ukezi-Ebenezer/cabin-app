'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { TrendingDown, TrendingUp, Wallet, ArrowRightLeft } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';

function Counter({ from, to, prefix = "", suffix = "", decimals = 0 }: { from: number; to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (inView && node) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          const formatted = value.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          });
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, prefix, suffix, decimals]);

  return <span ref={nodeRef}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
}

export function FinancialMetrics() {
  const metrics = [
    {
      title: "Burn Rate",
      value: 42.5,
      prefix: "$",
      suffix: "k",
      decimals: 1,
      change: "-2.4%",
      isPositive: true,
      icon: TrendingDown,
      color: "text-success",
      bg: "bg-success/10"
    },
    {
      title: "Runway",
      value: 19.4,
      prefix: "",
      suffix: " mo",
      decimals: 1,
      change: "+3.1m",
      isPositive: true,
      icon: TrendingUp,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Cash Balance",
      value: 2.4,
      prefix: "$",
      suffix: "M",
      decimals: 1,
      change: "Updated now",
      isNeutral: true,
      icon: Wallet,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Monthly Expenses",
      value: 124.2,
      prefix: "$",
      suffix: "k",
      decimals: 1,
      change: "+5.2%",
      isPositive: false,
      icon: ArrowRightLeft,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Numbers you can trust.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Cabin monitors your financial health in real-time, giving you absolute clarity on where you stand.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className="bg-card border border-white/10 rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(108,59,255,0.3)] shadow-xl group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.bg} ${metric.color} group-hover:scale-110 transition-transform`}>
                  <metric.icon size={24} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-2">{metric.title}</p>
              <div className="text-4xl font-bold text-white mb-4 tracking-tighter">
                <Counter from={0} to={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
              </div>
              <div className={`text-sm font-semibold flex items-center gap-1 ${metric.isNeutral ? 'text-muted-foreground' : metric.isPositive ? 'text-success' : 'text-[#FF4D4D]'}`}>
                {!metric.isNeutral && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {metric.isPositive 
                      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                    }
                  </svg>
                )}
                {metric.change}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
