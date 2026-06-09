import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, Award, CheckCircle } from 'lucide-react';
import mascotImage from '../assets/images/smart_pikin_logo_1780411971046.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f7ff] via-white to-[#fff8ec] px-6 py-12 md:px-12 lg:py-20 lg:px-24">
      {/* Decorative ambient bubble background */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full bg-sky-main/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-100px] w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Sparkly Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-[#fff3cd] text-[#b07c00] font-extrabold text-xs md:text-sm px-4.5 py-2 rounded-full border-2 border-[#fcd564] mb-6 shadow-sm uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-[#fcd564] fill-[#fcd564]" />
            🌟 AI-Powered Reading Companion for Kids
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a2e3b] leading-[1.12] mb-6 tracking-tight max-w-xl md:max-w-2xl"
          >
            Help Your Child <span className="text-sky-dark decoration-sky-main">Read</span>, <span className="text-sun-yellow">Speak</span> &amp; <span className="text-emerald-500">Shine</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-[#3d5a70] text-base md:text-lg font-bold leading-relaxed mb-8 max-w-lg"
          >
            Smart Pikin is an AI reading companion that guides children through books, corrects pronunciation in real-time, and makes learning an adventure every single day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 z-10"
          >
            <a
              href="#signup"
              className="bg-sky-main hover:bg-sky-dark text-white font-black text-lg px-8 py-4 rounded-full shadow-[0_6px_20px_rgba(56,182,232,0.35)] hover:shadow-[0_8px_24px_rgba(56,182,232,0.45)] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 group"
            >
              🚀 Sign Up Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-sky-50 text-sky-dark font-black text-lg px-8 py-3.5 rounded-full border-2 border-sky-main shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-sky-main text-sky-main" />
              See How It Works
            </a>
          </motion.div>

          {/* Stats blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full grid grid-cols-3 gap-3 md:gap-6 border-t-2 border-[#e3f4fc] pt-8 max-w-md md:max-w-xl"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-display text-2xl md:text-3.5xl text-sky-dark leading-none">500+</span>
              <span className="text-[11px] md:text-xs font-black text-[#6b8fa3] uppercase tracking-wider mt-1.5">
                Books Available
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-x-2 border-sky-100/60 px-2 md:px-4">
              <span className="font-display text-2xl md:text-3.5xl text-sun-yellow leading-none">Ages 2–12</span>
              <span className="text-[11px] md:text-xs font-black text-[#6b8fa3] uppercase tracking-wider mt-1.5">
                All Age Groups
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-display text-2xl md:text-3.5xl text-emerald-500 leading-none">AI Live</span>
              <span className="text-[11px] md:text-xs font-black text-[#6b8fa3] uppercase tracking-wider mt-1.5">
                Live Feedback
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right column - Mascot Image */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          {/* Sparkle effects floating */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-6 bg-yellow-100 text-yellow-600 font-extrabold text-xs px-3 py-1.5 rounded-full border border-yellow-250 flex items-center gap-1 shadow-sm"
          >
            ✨ Super Fun!
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-6 right-2 bg-emerald-100 text-emerald-700 font-extrabold text-xs px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1 shadow-sm"
          >
            🗣️ Live Coaching
          </motion.div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
            className="relative p-6 max-w-md w-full"
          >
            {/* Visual design container with soft floating frame and custom shadows */}
            <div className="bg-gradient-to-t from-sky-main/15 to-transparent absolute inset-0 rounded-[40px] -rotate-3 scale-[1.02] -z-10 blur-xl" />
            
            <img
              src={mascotImage}
              alt="Smart Pikin kids learning together and reading with friendly robot companion"
              className="w-full max-w-[420px] mx-auto rounded-3xl [filter:drop-shadow(0_12px_24px_rgba(56,182,232,0.3))] transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-300 pointer-events-auto cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
