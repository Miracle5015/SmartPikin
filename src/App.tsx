import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import BookLibrary from './components/BookLibrary';
import SignupForm from './components/SignupForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-[#1a2e3b] bg-[#f7fbff]">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Primary Hero Presentation and Mascot Branding */}
      <Hero />

      {/* 3. Steps Guideline Segment */}
      <HowItWorks />

      {/* 4. Value/Core Features Bento Grid */}
      <Features />

      {/* 5. Book Shelf and Interactive PDF Uploader */}
      <BookLibrary />

      {/* 6. Secure Onboarding Form with Custom Webhook Integration Option */}
      <SignupForm />

      {/* 7. Parental Reviews Block */}
      <Testimonials />

      {/* 8. Interactive Accordion FAQ segment */}
      <FAQ />

      {/* 9. Site Footer with Quick Links and Automation Badges */}
      <Footer />
    </div>
  );
}
