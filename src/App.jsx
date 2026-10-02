import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloatingParticles from './components/FloatingParticles';
import AudioPlayer from './components/AudioPlayer';

import RememberSection from './components/sections/RememberSection';
import SorrySection from './components/sections/SorrySection';
import NoExcusesSection from './components/sections/NoExcusesSection';
import RememberThisSection from './components/sections/RememberThisSection';
import PromiseSection from './components/sections/PromiseSection';
import SafetySection from './components/sections/SafetySection';
import LetterSection from './components/sections/LetterSection';
import FinalSection from './components/sections/FinalSection';
import ClosedScreen from './components/sections/ClosedScreen';

export default function App() {
  const [isClosed, setIsClosed] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToNext = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReopen = () => {
    setIsClosed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LazyMotion features={domAnimation} strict={false}>
      <div className="relative min-h-screen bg-gradient-to-br from-[#FFF4F6] via-[#FCE7EC] to-[#FAD1DC] text-[#4A1527] font-sans antialiased selection:bg-[#F3A6B9] selection:text-[#360E1B]">
        {/* Subtle Progress Bar */}
        {!isClosed && (
          <m.div
            className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F3A6B9] via-[#E85D7A] to-[#B4234D] z-50 origin-left"
            style={{ scaleX }}
          />
        )}

        {/* Romantic Background Atmosphere & Floating Elements */}
        <FloatingParticles />

        {/* Ambient Audio Player */}
        <AudioPlayer />

        <AnimatePresence mode="wait">
          {!isClosed ? (
            <m.main
              key="content"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
              className="relative z-10 overflow-hidden"
            >
              {/* ========================================================================= */}
              {/* SECTION 1 — HERO LANDING */}
              {/* ========================================================================= */}
              <section
                id="landing"
                className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-6 py-14 sm:py-24 overflow-hidden"
              >
                {/* Soft radial glow and subtle curved background decorations */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {/* Large blurred central glow */}
                  <div className="w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] rounded-full bg-gradient-to-tr from-[#FAD1DC]/80 via-[#FFF4F6]/90 to-[#F3A6B9]/40 blur-3xl opacity-80" />
                  
                  {/* Soft decorative ambient circles */}
                  <div className="absolute w-[500px] sm:w-[780px] h-[500px] sm:h-[780px] rounded-full border border-[#E85D7A]/10 -rotate-12 pointer-events-none" />
                  <div className="absolute w-[360px] sm:w-[600px] h-[360px] sm:h-[600px] rounded-full border border-[#F3A6B9]/15 rotate-45 pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                  {/* Main Heading */}
                  <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#4A1527] tracking-tight leading-[1.18] mb-6 sm:mb-8">
                    Ruchika, I Owe You <br className="hidden sm:inline" />
                    <span className="italic font-normal font-serif text-[#B4234D]">A Real Apology.</span>
                  </h1>

                  {/* Supporting Text */}
                  <div className="space-y-1.5 sm:space-y-2 mb-8 sm:mb-12">
                    <p className="font-serif text-base sm:text-xl text-[#8E5365] italic tracking-wide">
                      Not an excuse.
                    </p>
                    <p className="font-serif text-base sm:text-xl text-[#8E5365] italic tracking-wide">
                      Not a justification.
                    </p>
                    <p className="font-sans text-xs sm:text-base font-semibold text-[#7B2943] uppercase tracking-[0.18em] pt-0.5 sm:pt-1">
                      Just an apology.
                    </p>
                  </div>

                  {/* Main CTA Button */}
                  <m.button
                    onClick={() => scrollToNext('remember')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-deep-rose group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-medium tracking-wide cursor-pointer"
                  >
                    <span>Read What I Couldn't Say Properly</span>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </m.button>
                </div>

                {/* Scroll Indicator */}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase text-[#C76A82]"
                >
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em]">Scroll gently</span>
                  <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-full border border-[#E85D7A]/40 flex items-start justify-center p-1">
                    <m.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-1 h-1 rounded-full bg-[#B4234D]"
                    />
                  </div>
                </m.div>
              </section>

              {/* SECTION 2 — “I Know What Hurt You” */}
              <RememberSection />

              {/* SECTION 3 — “I'M SORRY” */}
              <SorrySection />

              {/* SECTION 4 — NO EXCUSES (Dark Rose Velvet Section) */}
              <NoExcusesSection />

              {/* SECTION 5 — WHAT I WANT YOU TO KNOW */}
              <RememberThisSection />

              {/* SECTION 6 — A PROMISE */}
              <PromiseSection />

              {/* SECTION 7 — SECURITY / EMOTIONAL SAFETY */}
              <SafetySection />

              {/* SECTION 8 — PERSONAL MESSAGE (Letter Card) */}
              <LetterSection />

              {/* SECTION 9 — FINAL SECTION */}
              <FinalSection onOpenCloseScreen={() => setIsClosed(true)} />

              {/* Footer */}
              <footer className="py-12 px-6 text-center text-[10px] sm:text-[11px] text-[#8E5365]/80 font-sans tracking-[0.25em] uppercase bg-[#FAD1DC]">
                <p>For you, with all my sincerity.</p>
              </footer>
            </m.main>
          ) : (
            /* TRANQUIL CLOSING VIEW */
            <ClosedScreen onReopen={handleReopen} />
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
