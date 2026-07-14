'use client';

import { motion } from 'framer-motion';
import { Bot, Landmark, PieChart, FileText, LineChart, Users } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';

const features = [
  {
    title: "AI Financial Assistant",
    description: "Your proactive CFO that answers questions, categorizes expenses, and finds cost savings automatically.",
    icon: Bot,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Bank Integrations",
    description: "Connect safely to thousands of banks globally to sync transactions and balances in real-time.",
    icon: Landmark,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Transaction Categorization",
    description: "No more manual entry. Cabin's AI learns your business and categorizes line items with 99% accuracy.",
    icon: PieChart,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Founder Reports",
    description: "Generate beautiful, investor-ready financial reports (P&L, Balance Sheet) with a single click.",
    icon: FileText,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Cash Flow Forecasting",
    description: "Model out different hiring scenarios and see exactly how they impact your runway and cash flow.",
    icon: LineChart,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    title: "Multi-account Management",
    description: "Manage multiple entities, currencies, and bank accounts all from one unified dashboard view.",
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Everything you need to run finance.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built specifically for high-growth startups that need to move fast without breaking the bank.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className="group bg-card/50 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 transition-all duration-300 hover:bg-card hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(108,59,255,0.3)] shadow-lg"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform shadow-inner`}>
                <feature.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
