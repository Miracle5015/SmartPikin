import { motion } from 'motion/react';
import { STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section className="relative bg-[#f0faff] py-20 px-6 md:px-12 lg:px-24" id="how-it-works">
      {/* Wave transitions built natively with SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[30px]" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,40 L1440,0 Z" fill="#f7fbff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-4">
        {/* Section Label */}
        <span className="inline-block bg-[#e8f7ff] text-sky-dark font-black text-xs md:text-sm letter-spacing:0.06em uppercase px-4.5 py-1.5 rounded-full border-2 border-[#b5dcf0] mb-4">
          📚 Simple Process
        </span>

        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl text-[#1a2e3b] mb-4 tracking-tight leading-tight">
          Learning Made Easy in 4 Steps
        </h2>

        {/* Desc */}
        <p className="text-[#3d5a70] text-base md:text-lg font-bold max-w-xl mx-auto mb-16 leading-relaxed">
          Parents sign up, set up their child's profile, and let Smart Pikin's AI companion take care of the rest!
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(56,182,232,0.06)] border-2 border-sky-50 flex flex-col items-center group transition-all"
            >
              {/* Overhanging Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-sky-main text-white font-display text-sm flex items-center justify-center border-2 border-white shadow-[0_4px_12px_rgba(56,182,232,0.3)] group-hover:bg-sky-dark transition-colors">
                {step.num}
              </div>

              {/* Graphic Icon */}
              <div className="text-5xl mt-4 mb-4 select-none transform group-hover:scale-110 transition-transform duration-200">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="font-display text-lg text-[#1a2e3b] mb-2.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b8fa3] text-sm font-semibold leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
