'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';

const testimonials = [
  {
    quote: "Cabin completely eliminated our need for an outsourced bookkeeper. It caught $3k in duplicate AWS charges in its first week.",
    name: "Sarah Chen",
    role: "CEO & Founder",
    company: "Nexus AI",
    initials: "SC",
    color: "bg-blue-500"
  },
  {
    quote: "The runway forecasting is black magic. Being able to ask 'how does hiring 2 engineers affect runway' and getting an instant chart is game-changing.",
    name: "David Miller",
    role: "Co-founder",
    company: "Luminate",
    initials: "DM",
    color: "bg-purple-500"
  },
  {
    quote: "Investor updates used to take me a full day. Now I literally just click 'Generate P&L' and send it. Best $99/mo we spend.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "FlowState",
    initials: "ER",
    color: "bg-orange-500"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Loved by founders.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how fast-growing startups are taking control of their finances.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 relative flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(108,59,255,0.3)]"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif leading-none select-none">"</div>
              
              <p className="text-lg text-white leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-white text-lg shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
