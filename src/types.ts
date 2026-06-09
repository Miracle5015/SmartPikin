export interface Book {
  id: string;
  title: string;
  ageRange: string;
  icon: string;
  bg: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgClass: string;
}

export interface Step {
  num: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarBg: string;
  initial: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  childName: string;
  ageRange: string;
  readingLevel: string;
  timestamp: string;
  source: string;
}
