import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e3b] text-white py-16 px-6 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top footer row with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand block (takes 6 columns on large screens) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl text-sky-main tracking-tight leading-none mb-2">
              Smart <span className="text-yellow-400">Pikin</span>
            </h3>
            <p className="text-white/60 text-sm font-semibold max-w-sm leading-relaxed">
              An AI-powered reading companion helping African children read, speak, and thrive — one beautiful book at a time.
            </p>
          </div>

          {/* Product links (takes 3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-[#38b6e8] text-base leading-none mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#books" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Book Library
                </a>
              </li>
              <li>
                <a href="#signup" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Sign Up Free
                </a>
              </li>
            </ul>
          </div>

          {/* Support links (takes 3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-[#38b6e8] text-base leading-none mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-sky-main text-sm font-bold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row with copyright */}
        <div className="border-t border-slate-800/80 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/45 text-xs font-bold text-center sm:text-left">
            © {new Date().getFullYear()} Smart Pikin. All rights reserved. Made with ❤️ for African children.
          </p>

          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
            <span className="text-xs">⚡</span>
            <span>Powered by n8n Automation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
