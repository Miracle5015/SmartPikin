import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-tr from-[#f7fbff] to-[#fffaf1] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#fff3cd] text-[#b07c00] font-black text-xs md:text-sm px-4.5 py-1.5 rounded-full border-2 border-[#fcd564] mb-4">
            ⭐️ Parent Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a2e3b] mb-4 tracking-tight leading-tight">
            What Parents Are Saying
          </h2>
          <p className="text-[#3d5a70] text-base md:text-lg font-bold">
            Real results and warm stories from families across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(56,182,232,0.05)] border-2 border-[#e3f4fc] flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(56,182,232,0.1)] transition-shadow duration-300"
            >
              <div>
                {/* Visual Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 stroke-[1.5]"
                    />
                  ))}
                </div>

                <p className="text-[#3d5a70] text-sm md:text-[15px] font-semibold leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Reviewer Meta info */}
              <div className="flex items-center gap-3 border-t border-sky-100/60 pt-5">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-display text-white text-sm shadow-sm ${test.avatarBg}`}
                >
                  {test.initial}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a2e3b] leading-tight mb-0.5">
                    {test.name}
                  </h4>
                  <span className="text-xs font-black text-[#6b8fa3] uppercase tracking-wide">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
