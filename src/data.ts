import { Book, Feature, Step, Testimonial, FaqItem } from './types';

export const STEPS: Step[] = [
  {
    num: 1,
    icon: "👨‍👩‍👧",
    title: "Parent Signs Up",
    description: "Create your free account in under 2 minutes. Secure, simple, and completely free to start."
  },
  {
    num: 2,
    icon: "🎂",
    title: "Add Your Child",
    description: "Enter your child's name, age range, and reading level. Smart Pikin personalises everything automatically."
  },
  {
    num: 3,
    icon: "📚",
    title: "Pick a Book",
    description: "Browse our library of age-appropriate books — or upload your own favourite story as a PDF."
  },
  {
    num: 4,
    icon: "🎤",
    title: "Read & Learn",
    description: "Your child reads aloud while our AI listens, coaches pronunciation, and celebrates every win."
  }
];

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Real-Time Pronunciation Coach",
    description: "As your child reads aloud, the AI listens and gently corrects mispronunciations in a fun, encouraging way — no shame, only growth.",
    icon: "🎤",
    bgClass: "bg-sky-50 text-sky-600 border-sky-100"
  },
  {
    id: "f2",
    title: "AI Reading Companion",
    description: "Our AI doesn't just correct — it explains words, answers questions about the story, and keeps children engaged page after page.",
    icon: "🧠",
    bgClass: "bg-yellow-50 text-amber-500 border-yellow-105"
  },
  {
    id: "f3",
    title: "Upload Your Own Books",
    description: "Have a favourite storybook or school textbook? Upload it and Smart Pikin turns it into a full interactive reading session.",
    icon: "📖",
    bgClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    id: "f4",
    title: "Age-Calibrated Content",
    description: "From toddlers learning their ABCs to pre-teens reading chapter books — content and difficulty adapt automatically.",
    icon: "🌈",
    bgClass: "bg-orange-50 text-orange-500 border-orange-105"
  },
  {
    id: "f5",
    title: "Parent Progress Dashboard",
    description: "Track reading streaks, pronunciation scores, books completed, and vocabulary growth — all in one clear parent view.",
    icon: "📊",
    bgClass: "bg-pink-50 text-pink-500 border-pink-100"
  },
  {
    id: "f6",
    title: "Rewards & Milestones",
    description: "Children earn stars, badges, and fun rewards as they read more — keeping motivation sky-high and screen time meaningful.",
    icon: "🏆",
    bgClass: "bg-purple-50 text-purple-600 border-purple-100"
  }
];

export const BOOKS: Book[] = [
  {
    id: "b1",
    title: "The Lion Who Lost His Roar",
    ageRange: "Ages 3–5",
    icon: "🦁",
    bg: "bg-amber-50 border-amber-100"
  },
  {
    id: "b2",
    title: "Adventures in the Forest",
    ageRange: "Ages 4–6",
    icon: "🌳",
    bg: "bg-emerald-50 border-emerald-110"
  },
  {
    id: "b3",
    title: "My First Space Journey",
    ageRange: "Ages 5–7",
    icon: "🚀",
    bg: "bg-indigo-50 border-indigo-100"
  },
  {
    id: "b4",
    title: "Under the Deep Blue Sea",
    ageRange: "Ages 4–7",
    icon: "🐠",
    bg: "bg-sky-50 border-sky-100"
  },
  {
    id: "b5",
    title: "The Little Princess",
    ageRange: "Ages 6–9",
    icon: "👑",
    bg: "bg-rose-50 border-rose-100"
  },
  {
    id: "b6",
    title: "Around Africa in 80 Days",
    ageRange: "Ages 8–12",
    icon: "🌍",
    bg: "bg-blue-50 border-blue-100"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ngozi Adeyemi",
    role: "Mum of 2, Lagos",
    text: "My daughter used to dread reading. After 3 weeks with Smart Pikin, she reads every night before bed without being asked. The AI correction is so gentle — she actually enjoys it now!",
    rating: 5,
    avatarBg: "bg-sky-500",
    initial: "NA"
  },
  {
    id: "t2",
    name: "Kofi Entsua",
    role: "Dad of 1, Accra",
    text: "I uploaded my son's school textbook and Smart Pikin turned it into a full reading session. His teacher noticed improvement within just one month. This app is a blessing!",
    rating: 5,
    avatarBg: "bg-amber-500",
    initial: "KE"
  },
  {
    id: "t3",
    name: "Fatima Omotayo",
    role: "Mum of twins, Abuja",
    text: "The pronunciation coaching is amazing. My twins speak so much more clearly now. The parent dashboard keeps me involved even when I'm at work. Smart Pikin is a game changer.",
    rating: 5,
    avatarBg: "bg-emerald-500",
    initial: "FO"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq1",
    question: "What age is Smart Pikin designed for?",
    answer: "Smart Pikin supports children from age 2 to 12, across four age groups: 2–3, 4–5, 6–8, and 9–12. Content, difficulty, and AI interaction style all adjust automatically based on your child's profile."
  },
  {
    id: "faq2",
    question: "How does the AI pronunciation correction work?",
    answer: "Your child reads aloud while our AI listens through the device microphone. When a word is mispronounced, the AI gently highlights it, gives the correct pronunciation, and encourages them to try again — in a warm, child-friendly tone."
  },
  {
    id: "faq3",
    question: "Can I upload my child's school books?",
    answer: "Yes! You can upload books as PDFs or image files. Smart Pikin's AI processes the book and creates a full interactive reading session from it, including pronunciation coaching and comprehension support."
  },
  {
    id: "faq4",
    question: "Is my child's data safe?",
    answer: "Absolutely. All data is encrypted and never shared with third parties. Voice recordings are processed in real-time and not permanently stored. We follow strict child data protection standards."
  },
  {
    id: "faq5",
    question: "How does Smart Pikin connect to my automation workflow?",
    answer: "When a parent submits the sign-up form, it sends a secure POST request to a webhook helper in our backend. You can easily connect this to any custom automation endpoint like n8n or Make to manage parent onboarding, automated welcome emails, and child reading setups."
  },
  {
    id: "faq6",
    question: "Is there a free plan?",
    answer: "Yes! Smart Pikin is free to start with access to a selection of books and core reading features. Premium plans unlock the full library, unlimited uploads, and detailed progress analytics."
  }
];
