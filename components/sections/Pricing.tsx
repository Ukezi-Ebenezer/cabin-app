'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For early-stage startups finding product-market fit.",
      price: "$99",
      period: "/month",
      features: [
        "Up to $50k monthly spend",
        "Automated bookkeeping",
        "Basic P&L and Balance Sheet",
        "Email support",
      ],
      highlighted: false,
      buttonText: "Start Free",
    },
    {
      name: "Growth",
      description: "For scaling companies with complex financial needs.",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited monthly spend",
        "Advanced scenario modeling",
        "Custom investor reports",
        "Dedicated AI CFO instance",
        "Priority 24/7 support",
      ],
      highlighted: true,
      buttonText: "Get Growth",
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Simple, transparent pricing.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pay for the value you get. No hidden fees or surprise charges.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className={`relative p-8 rounded-[32px] border ${
                plan.highlighted 
                  ? 'bg-card/80 border-primary/50 shadow-[0_0_40px_rgba(108,59,255,0.2)] hover:shadow-[0_10px_40px_-10px_rgba(108,59,255,0.4)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(108,59,255,0.3)]'
              } transition-all duration-300 hover:-translate-y-2 flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-glow">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">{plan.period}</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className={plan.highlighted ? "text-primary" : "text-white/30"} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  plan.highlighted 
                    ? 'bg-primary text-white shadow-glow hover:shadow-[0_0_20px_rgba(108,59,255,0.6)]' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:shadow-lg'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
