import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';
import mascotImage from '../assets/images/smart_pikin_logo_1780411971046.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Books', href: '#books' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-sky-100 px-6 py-3.5 md:px-12 flex items-center justify-between transition-all">
      {/* Brand logo & title */}
      <a href="#" className="flex items-center gap-3 decoration-transparent group">
        <div className="relative">
          <img
            src={mascotImage}
            alt="Smart Pikin Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-sky-main group-hover:scale-105 transition-transform duration-200"
            referrerPolicy="no-referrer"
          />
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-white p-0.5 rounded-full text-[10px] animate-bounce">
            ★
          </span>
        </div>
        <div>
          <span className="font-display text-2xl text-sky-dark tracking-tight">
            Smart <span className="text-sun-yellow">Pikin</span>
          </span>
          <span className="block text-[10px] font-bold text-sky-main/80 uppercase tracking-widest leading-none">
            Kids Learning Fun
          </span>
        </div>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-bold text-[#3d5a70] hover:text-sky-dark transition-colors duration-200 text-[15px] relative group"
          >
            {item.label}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-sky-main rounded-full transition-all group-hover:w-full"></span>
          </a>
        ))}
        <a
          href="#signup"
          className="bg-sky-main hover:bg-sky-dark text-white font-black text-sm px-6 py-2.5 rounded-full shadow-[0_4px_14px_rgba(56,182,232,0.3)] hover:shadow-[0_6px_20px_rgba(56,182,232,0.4)] transition-all transform hover:-translate-y-0.5 text-center flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          Get Started Free
        </a>
      </div>

      {/* Mobile Menu Trigger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="md:hidden p-2 rounded-xl border-2 border-sky-100 text-sky-dark hover:bg-sky-50 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b-2 border-sky-100 shadow-xl flex flex-col p-6 gap-4 md:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-extrabold text-[#3d5a70] hover:text-sky-dark py-2 text-lg border-b border-sky-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="bg-sky-main text-white font-extrabold text-center py-3.5 rounded-full text-lg shadow-lg hover:bg-sky-dark transition-all mt-2 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              Get Started Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
