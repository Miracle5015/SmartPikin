import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#e8f7ff] text-sky-dark font-black text-xs md:text-sm px-4.5 py-1.5 rounded-full border-2 border-[#b5dcf0] mb-4">
            🙋‍♀️ Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a2e3b] mb-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3d5a70] text-base md:text-lg font-bold">
            Everything happy parents want to know before letting their kids get reading.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-2 border-[#e3f4fc] rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(56,182,232,0.03)] hover:shadow-[0_8px_24px_rgba(56,182,232,0.07)] transition-shadow duration-200"
              >
                {/* Question Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-extrabold text-[15px] md:text-base text-[#1a2e3b] bg-white cursor-pointer select-none outline-none group"
                >
                  <span className="group-hover:text-sky-dark transition-colors">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-main transition-transform shrink-0 duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-[#3d5a70] text-sm md:text-[15px] font-semibold leading-relaxed border-t border-sky-50/50 bg-[#f7fbff]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
