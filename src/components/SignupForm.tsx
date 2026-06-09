import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Check, Send, AlertCircle, Settings, HelpCircle } from 'lucide-react';
import { SignupPayload } from '../types';

export default function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [readingLevel, setReadingLevel] = useState('');
  const [password, setPassword] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [webhookUrl, setWebhookUrl] = useState('');

  useEffect(() => {
    const envUrl = ((import.meta as any).env?.VITE_N8N_WEBHOOK_URL as string) || '';
    setWebhookUrl(envUrl);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ageRange) {
      setErrorMsg("Please select your child's age range!");
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const payload: SignupPayload = {
      firstName,
      lastName,
      email,
      phone,
      childName,
      ageRange,
      readingLevel,
      timestamp: new Date().toISOString(),
      source: 'smart-pikin-landing-page'
    };

    try {
      if (webhookUrl && webhookUrl.trim() !== '') {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          throw new Error(`External webhook returned status ${res.status}`);
        }
      } else {
        // Mock fallback simulation for onboarding
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || 'Something went wrong submitting data. Please verify your n8n Webhook URL is accessible.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ageOptions = [
    { value: '2-3', label: 'Ages 2–3', emoji: '🍼' },
    { value: '4-5', label: 'Ages 4–5', emoji: '🌱' },
    { value: '6-8', label: 'Ages 6–8', emoji: '📖' },
    { value: '9-12', label: 'Ages 9–12', emoji: '🚀' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-sky-dark via-sky-main to-[#6fcfe0] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden" id="signup">
      {/* Dynamic graphic details */}
      <div className="absolute top-[-80px] right-[-60px] w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="font-display text-4xl sm:text-5xl md:text-[54px] text-white tracking-tight leading-[1.12] mb-6">
            Start Your Child's Reading Journey Today 🎉
          </h2>
          <p className="text-white/90 text-base md:text-lg font-bold leading-relaxed mb-8 max-w-xl">
            Join thousands of parents giving their children the gift of fluent, confident reading. Easy setup, no credit card required to start.
          </p>

          {/* Value Badges */}
          <div className="grid grid-cols-2 gap-4 max-w-md w-full">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span className="font-bold text-sm">Free to Start</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#fcd564]" />
              <span className="font-bold text-sm">Safe for Kids</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-sky-200" />
              <span className="font-bold text-sm">Real-time AI</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <span className="text-lg">⚡</span>
              <span className="font-bold text-sm">Works Anywhere</span>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-6 w-full max-w-xl mx-auto z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-800 shadow-2xl border-4 border-white/20 relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-2xl text-[#1a2e3b] mb-1.5">
                      Create Your Parent Account
                    </h3>
                    <p className="text-[#6b8fa3] text-sm font-semibold">
                      Takes less than 2 minutes — your child will be reading aloud in seconds!
                    </p>
                  </div>

                  {errorMsg && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-rose-50 border-2 border-rose-100 p-3.5 rounded-xl flex items-start gap-2.5 text-rose-700"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-xs font-bold leading-relaxed">{errorMsg}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Names Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                          Parent's First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g. Amaka"
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                          Parent's Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="e.g. Okafor"
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="parent@email.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +234..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Child details */}
                    <div>
                      <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                        Child's First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Temi"
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                      />
                    </div>

                    {/* Age cards selection */}
                    <div>
                      <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                        Child's Age Group
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {ageOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setAgeRange(opt.value)}
                            className={`flex items-center gap-2 px-3.5 py-3.5 rounded-xl border-2 text-xs font-extrabold transition-all ${
                              ageRange === opt.value
                                ? 'border-sky-main bg-sky-50 text-sky-dark shadow-sm'
                                : 'border-[#dce9f0] bg-[#f7fbff] text-[#3d5a70] hover:border-sky-200'
                            }`}
                          >
                            <span className="text-base select-none">{opt.emoji}</span>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reading Levels dropdown */}
                    <div>
                      <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                        Child's Current Reading Level
                      </label>
                      <select
                        required
                        value={readingLevel}
                        onChange={(e) => setReadingLevel(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold outline-none transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select reading level...</option>
                        <option value="beginner">Beginner (just learning letters &amp; sounds)</option>
                        <option value="early">Early Reader (short, simple words)</option>
                        <option value="developing">Developing Reader (combines full sentences)</option>
                        <option value="fluent">Fluent Reader (reads full narrative stories)</option>
                      </select>
                    </div>

                    {/* Secure password */}
                    <div>
                      <label className="block text-[11px] font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                        Create Parent Password
                      </label>
                      <input
                        type="password"
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#dce9f0] bg-[#f7fbff] focus:border-sky-main text-[#1a2e3b] text-sm font-bold placeholder-[#adbcd2] outline-none transition-all"
                      />
                    </div>

                    {/* CTA Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sky-main to-sky-dark hover:from-sky-dark hover:to-[#1780b0] text-white py-4 px-6 rounded-full font-display text-lg shadow-[0_6px_22px_rgba(56,182,232,0.35)] hover:shadow-[0_8px_24px_rgba(56,182,232,0.48)] hover:-translate-y-0.5 transition-all outline-none flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-5 w-5 border-2 border-white border-t-transparent animate-spin rounded-full inline-block" />
                          Setting up account...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-white/95" />
                          Start Reading for Free
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-[#6b8fa3] font-bold text-center leading-relaxed">
                      By registering you agree to our <a href="#" className="text-sky-dark hover:underline">Terms of Service</a> &amp; <a href="#" className="text-sky-dark hover:underline">Privacy Policy</a>. Data safety is child-prioritized.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                    <Check className="w-10 h-10 text-emerald-500 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-emerald-600 mb-2">
                      Welcome to Smart Pikin! 🥳
                    </h3>
                    <p className="text-slate-800 font-extrabold text-[#3a5266] text-base leading-relaxed">
                      Amazing job, your companion account has been successfully set up for <span className="text-sky-dark">{childName}</span>! Let's get reading.
                    </p>
                  </div>
                  <div className="bg-[#f0faff] rounded-2.5xl p-5 border border-sky-100 max-w-sm mx-auto text-left space-y-2.5">
                    <p className="text-xs font-black text-sky-dark uppercase tracking-wider mb-1">
                      Account Dashboard
                    </p>
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Primary Email:</span>
                      <span className="text-sky-dark">{email}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Reading Companion:</span>
                      <span className="text-[#3d5a70]">{childName} ({ageOptions.find(o => o.value === ageRange)?.label})</span>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-bold leading-relaxed rounded-xl text-center border border-emerald-100">
                    <span>🌟 Your child's personalized library and live audio coach are ready in the companion profile.</span>
                  </div>

                  <button
                    onClick={() => {
                      setFirstName('');
                      setLastName('');
                      setEmail('');
                      setPhone('');
                      setChildName('');
                      setAgeRange('');
                      setReadingLevel('');
                      setPassword('');
                      setIsSuccess(false);
                    }}
                    className="bg-[#e3f4fc] hover:bg-sky-main/15 text-sky-dark font-black text-sm px-6 py-2.5 rounded-full transition-all"
                  >
                    Create Another Account
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
