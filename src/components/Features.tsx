import { motion } from 'motion/react';
import { FEATURES } from '../data';

export default function Features() {
  return (
    <section className="bg-gradient-to-br from-[#f7fbff] to-white py-20 px-6 md:px-12 lg:px-24" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#e8f7ff] text-sky-dark font-black text-xs md:text-sm px-4.5 py-1.5 rounded-full border-2 border-[#b5dcf0] mb-4">
            ✨ Why Parents Love It
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a2e3b] mb-4 tracking-tight leading-tight">
            Everything Your Child Needs to Grow
          </h2>
          <p className="text-[#3d5a70] text-base md:text-lg font-bold">
            Smart Pikin combines the warmth of a human reading tutor with the advanced intelligence of AI to build confident young readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(56,182,232,0.05)] border-2 border-[#e3f4fc] hover:shadow-[0_16px_48px_rgba(56,182,232,0.12)] transition-all flex flex-col group"
            >
              {/* Icon Bubble */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200 border border-sky-100/50 ${feat.bgClass}`}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-[#1a2e3b] mb-3 group-hover:text-sky-dark transition-colors">
                {feat.title}
              </h3>

              {/* Desc */}
              <p className="text-[#6b8fa3] text-sm md:text-sm font-semibold leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
