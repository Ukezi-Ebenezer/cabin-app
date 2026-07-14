'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Cabin connect to my bank accounts?",
    answer: "Cabin uses secure, read-only integrations through Plaid and Stripe to sync your financial data in real-time. We never have access to move your money or make changes to your accounts."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant and undergo regular security audits."
  },
  {
    question: "Do I still need an accountant or bookkeeper?",
    answer: "For day-to-day operations, categorization, and reporting, Cabin handles everything automatically. We recommend keeping a CPA for your annual tax filings, and Cabin makes it easy to export clean books for them."
  },
  {
    question: "How accurate is the AI categorization?",
    answer: "Our AI categorization engine is 99% accurate out of the box for standard startup expenses (SaaS, payroll, AWS, etc.). For edge cases, it asks you once and learns your preference for all future transactions."
  },
  {
    question: "Can I model different hiring scenarios?",
    answer: "Yes! Our Scenario Engine lets you input potential hires, software upgrades, or marketing spends, and instantly shows how those decisions will impact your cash flow and overall runway."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Frequently asked questions.</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about the product and how it works.</p>
        </div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/40 border border-white/5 rounded-2xl px-6 data-[state=open]:bg-white/5 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
