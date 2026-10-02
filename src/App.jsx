import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Feather, 
  Clock, 
  Check, 
  RotateCcw,
  Flower2
} from 'lucide-react';
import FloatingParticles from './components/FloatingParticles';
import AudioPlayer from './components/AudioPlayer';
import SectionDivider from './components/SectionDivider';

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFF4F6] via-[#FCE7EC] to-[#FAD1DC] text-[#4A1527] font-sans antialiased selection:bg-[#F3A6B9] selection:text-[#360E1B]">
      {/* Subtle Progress Bar */}
      {!isClosed && (
        <motion.div
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
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
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

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
              >
                {/* Personal Note Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/70 border border-[#E85D7A]/40 text-[#4A1527] text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-6 sm:mb-8 shadow-sm backdrop-blur-md"
                >
                  <span className="text-[#E85D7A] text-xs">♥</span>
                  <span>A Personal Note</span>
                </motion.div>

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
                <motion.button
                  onClick={() => scrollToNext('remember')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-deep-rose group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-medium tracking-wide"
                >
                  <span>Read What I Couldn't Say Properly</span>
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:translate-y-0.5 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase text-[#C76A82]"
              >
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em]">Scroll gently</span>
                <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-full border border-[#E85D7A]/40 flex items-start justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-1 h-1 rounded-full bg-[#B4234D]"
                  />
                </div>
              </motion.div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 2 — “I Know What Hurt You” */}
            {/* ========================================================================= */}
            <section
              id="remember"
              className="relative py-14 sm:py-24 px-5 sm:px-6 bg-[#FFF7F8] flex flex-col items-center text-center"
            >
              <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-4">
                    Accountability
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-10 tracking-tight">
                    I Remember What I Said.
                  </h2>

                  <div className="glass-card-pink rounded-3xl p-8 sm:p-12 space-y-6 text-[#4A1527] text-base sm:text-lg leading-relaxed text-left sm:text-center">
                    <p className="font-serif italic text-lg sm:text-xl text-[#B4234D] font-medium">
                      “I said something about your appearance that I should never have said to you.”
                    </p>
                    
                    <div className="w-12 h-[1px] bg-[#E85D7A]/30 mx-auto my-4" />

                    <p className="text-sm sm:text-base text-[#8E5365] leading-relaxed">
                      I said it in anger, but being angry doesn't make those words okay.
                    </p>

                    <p className="text-sm sm:text-base text-[#8E5365] leading-relaxed">
                      I understand why they hurt you.<br />
                      And I understand why you remembered them.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 3 — “I'M SORRY” */}
            {/* ========================================================================= */}
            <section
              id="sorry"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FCE7EC] flex flex-col items-center text-center"
            >
              <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <div className="inline-block mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 text-[#E85D7A] fill-[#FAD1DC] mx-auto" />
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#4A1527] mb-8 sm:mb-12 tracking-tight">
                    I’m Sorry, Ruchika.
                  </h2>

                  <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto text-[#4A1527] text-base sm:text-lg leading-relaxed font-serif">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
                    >
                      I’m sorry for making you feel bad about yourself.
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
                    >
                      I’m sorry for using words that could make you question how I see you.
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
                    >
                      I’m sorry that my anger came out as something hurtful.
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
                    >
                      And I’m sorry that a few careless words made you feel like you weren't valued.
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.8 }}
                    className="mt-8 sm:mt-12 inline-block px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-white/65 border border-[#E85D7A]/30 shadow-xs backdrop-blur-md"
                  >
                    <p className="font-serif italic text-lg sm:text-2xl text-[#B4234D] font-medium tracking-wide">
                      “You didn't deserve that.”
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 4 — NO EXCUSES (Dark Rose Velvet Section) */}
            {/* ========================================================================= */}
            <section
              id="no-excuses"
              className="relative py-14 sm:py-24 px-5 sm:px-6 bg-[#4A1527] text-[#FFF4F6] overflow-hidden shadow-2xl"
            >
              {/* Ambient dark velvet glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#E85D7A]/20 rounded-full blur-[130px]" />
                <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#B4234D]/25 rounded-full blur-[100px]" />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                <SectionDivider dark={true} />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#F3A6B9]/80 font-medium block mb-3 sm:mb-4">
                    Zero Justifications
                  </span>

                  <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#FFF4F6] mb-8 sm:mb-14 tracking-tight leading-snug">
                    I Don't Want To Hide Behind <br className="hidden sm:inline" />
                    <span className="italic text-[#F3A6B9]">‘I Was Angry.’</span>
                  </h2>

                  <div className="glass-card-darkrose rounded-3xl p-6 sm:p-14 space-y-6 sm:space-y-8 text-left max-w-2xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                      className="space-y-1.5 sm:space-y-2 border-l-2 border-[#E85D7A]/70 pl-4 sm:pl-5"
                    >
                      <p className="text-base sm:text-xl font-serif text-[#FFF4F6]/95">
                        I was angry.
                      </p>
                      <p className="text-xs sm:text-base text-[#FAD1DC]/80">
                        That explains why I said it.
                      </p>
                      <p className="text-sm sm:text-lg font-medium text-[#F3A6B9] pt-1">
                        It does NOT excuse what I said.
                      </p>
                    </motion.div>

                    <div className="w-full h-[1px] bg-white/10" />

                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="space-y-2.5 sm:space-y-3 text-xs sm:text-base text-[#FFF4F6]/85 leading-relaxed"
                    >
                      <p>I should have controlled myself.</p>
                      <p>I should have chosen silence instead of hurting you.</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="pt-2 text-center"
                    >
                      <span className="inline-block px-6 py-2 sm:px-7 sm:py-2.5 rounded-full bg-white/10 border border-white/20 text-[#FFF4F6] font-serif text-base sm:text-lg tracking-wide italic">
                        That's on me.
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 5 — WHAT I WANT YOU TO KNOW */}
            {/* ========================================================================= */}
            <section
              id="remember-this"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FFF1F4] flex flex-col items-center text-center"
            >
              <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-3 sm:mb-4">
                    Perspective
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-8 sm:mb-12 tracking-tight">
                    Please Remember This.
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                    {/* Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.7 }}
                      className="glass-card-pink p-6 sm:p-8 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] mb-4 sm:mb-5 border border-[#E85D7A]/20">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-2xl font-medium text-[#4A1527] mb-2">
                          You Are Valued
                        </h3>
                        <p className="text-xs sm:text-base text-[#8E5365] leading-relaxed">
                          One angry sentence doesn't define how I should have treated you.
                        </p>
                      </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      className="glass-card-pink p-6 sm:p-8 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] mb-4 sm:mb-5 border border-[#E85D7A]/20">
                          <Feather className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-2xl font-medium text-[#4A1527] mb-2">
                          You Are Respected
                        </h3>
                        <p className="text-xs sm:text-base text-[#8E5365] leading-relaxed">
                          Your feelings are valid, even if I don't always understand them immediately.
                        </p>
                      </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className="glass-card-pink p-6 sm:p-8 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] mb-4 sm:mb-5 border border-[#E85D7A]/20">
                          <Flower2 className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-2xl font-medium text-[#4A1527] mb-2">
                          You Are Safe To Be Yourself
                        </h3>
                        <p className="text-xs sm:text-base text-[#8E5365] leading-relaxed">
                          You should never feel like you have to change your appearance or yourself to deserve respect.
                        </p>
                      </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      className="glass-card-pink p-6 sm:p-8 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] mb-4 sm:mb-5 border border-[#E85D7A]/20">
                          <Clock className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-2xl font-medium text-[#4A1527] mb-2">
                          Your Space Is Yours
                        </h3>
                        <p className="text-xs sm:text-base text-[#8E5365] leading-relaxed">
                          I won't force you to talk, meet, or forgive me before you're ready.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 6 — A PROMISE */}
            {/* ========================================================================= */}
            <section
              id="promise"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-[#FFF1F4] via-[#FAD1DC]/50 to-[#FFF4F6] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle line-art heart motif behind */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full bg-[#E85D7A]/10 blur-3xl pointer-events-none" />
              </div>

              <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-3 sm:mb-4">
                    Commitment
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-8 sm:mb-12 tracking-tight">
                    What I Can Promise
                  </h2>

                  <div className="glass-card-pink p-6 sm:p-14 relative overflow-hidden text-left bg-white/75">
                    <p className="font-serif italic text-base sm:text-xl text-[#4A1527] mb-5 sm:mb-6 leading-relaxed">
                      “I can't promise that we'll never disagree.
                      <br />
                      But I can promise to work on how I handle those disagreements.”
                    </p>

                    <div className="space-y-3 sm:space-y-4 my-6 sm:my-8 text-xs sm:text-base text-[#4A1527]">
                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] shrink-0 mt-0.5 border border-[#E85D7A]/30">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className="text-[#8E5365]">I can pause before speaking.</span>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] shrink-0 mt-0.5 border border-[#E85D7A]/30">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className="text-[#8E5365]">I can walk away when I'm too angry.</span>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] shrink-0 mt-0.5 border border-[#E85D7A]/30">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className="text-[#8E5365]">I can communicate instead of attacking.</span>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#E85D7A] shrink-0 mt-0.5 border border-[#E85D7A]/30">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className="font-medium text-[#4A1527]">
                          And I can learn to never use your insecurities or appearance as a weapon during an argument.
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E85D7A]/15 text-center sm:text-left">
                      <p className="font-serif italic text-base sm:text-xl text-[#B4234D] font-medium">
                        You deserve that respect.
                      </p>
                    </div>

                    {/* Animated glowing line */}
                    <motion.div
                      className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E85D7A] to-transparent mt-6 sm:mt-8"
                      animate={{ opacity: [0.35, 0.9, 0.35], scaleX: [0.85, 1, 0.85] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 7 — SECURITY / EMOTIONAL SAFETY */}
            {/* ========================================================================= */}
            <section
              id="safety"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FCE7EC] flex flex-col items-center text-center"
            >
              <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  {/* Subtle Shield + Heart Emblem */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E85D7A]/30 to-[#FAD1DC] rotate-6" />
                    <div className="absolute inset-0 rounded-2xl bg-white/80 border border-[#E85D7A]/30 flex items-center justify-center shadow-sm">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#B4234D]" />
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-2 sm:mb-3">
                    Emotional Safety
                  </span>

                  <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-6 sm:mb-10 tracking-tight">
                    I Want You To Feel Safe With Me.
                  </h2>

                  <div className="glass-card-pink p-6 sm:p-12 space-y-5 sm:space-y-7 text-[#4A1527]">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-medium tracking-widest uppercase text-[#B4234D]">
                      <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/70 border border-[#E85D7A]/20">Not controlled</span>
                      <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/70 border border-[#E85D7A]/20">Not pressured</span>
                      <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/70 border border-[#E85D7A]/20">Not judged</span>
                    </div>

                    <p className="font-serif text-xl sm:text-3xl font-medium text-[#4A1527] italic py-1 sm:py-2">
                      Safe.
                    </p>

                    <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-base text-[#8E5365] text-left max-w-lg mx-auto">
                      <p className="flex items-center gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D7A] shrink-0" />
                        <span>Safe enough to tell me when something hurts.</span>
                      </p>
                      <p className="flex items-center gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D7A] shrink-0" />
                        <span>Safe enough to disagree with me.</span>
                      </p>
                      <p className="flex items-center gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D7A] shrink-0" />
                        <span>Safe enough to be angry with me.</span>
                      </p>
                      <p className="flex items-center gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D7A] shrink-0" />
                        <span>Safe enough to tell me when I've crossed a line.</span>
                      </p>
                      <p className="flex items-center gap-2 sm:gap-2.5 font-medium text-[#4A1527]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B4234D] shrink-0" />
                        <span>Safe enough to say ‘I need space.’</span>
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-[#E85D7A]/20">
                      <p className="font-serif text-sm sm:text-lg text-[#8E5365] italic">
                        And if you need space right now,<br />
                        <strong className="text-[#4A1527] font-semibold not-italic">I will respect that.</strong>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 8 — PERSONAL MESSAGE (Letter Card) */}
            {/* ========================================================================= */}
            <section
              id="letter"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FFF7F8] flex flex-col items-center"
            >
              <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <div className="text-center mb-6 sm:mb-10">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-2 sm:mb-3">
                      A Letter
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] tracking-tight">
                      From Me, To You.
                    </h2>
                  </div>

                  {/* Physical Letter Card with Soft Blush / Paper Texture */}
                  <div className="letter-paper-pink relative p-6 sm:p-14">
                    {/* Wax Seal Accent */}
                    <div className="absolute top-5 right-5 sm:top-8 sm:right-8">
                      <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#B4234D] to-[#4A1527] flex items-center justify-center text-[#FAD1DC] shadow-md border border-[#F3A6B9]/40">
                        <span className="font-serif italic font-bold text-sm sm:text-lg">S</span>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 text-[#4A1527] font-serif text-sm sm:text-lg leading-relaxed pt-2 sm:pt-4">
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C76A82] font-semibold">
                        Dear Ruchika,
                      </p>

                      <p>
                        I know saying ‘sorry’ doesn't magically erase what I said.
                      </p>

                      <p>
                        I wish I could take those words back before they reached you.
                      </p>

                      <p>
                        But since I can't, the least I can do is accept that I hurt you and learn from it.
                      </p>

                      <p>
                        You mean a lot to me, and that's exactly why I should have treated your feelings with more care.
                      </p>

                      <p className="italic text-[#B4234D]">
                        I'm not asking you to forget.
                      </p>

                      <p>
                        I'm asking you to believe that I'm genuinely sorry and that I want to become better at loving you — especially when I'm angry.
                      </p>

                      <div className="pt-6 sm:pt-8 flex flex-col items-end">
                        <div className="w-20 sm:w-24 h-[1px] bg-[#E85D7A]/30 mb-2 sm:mb-3" />
                        <p className="font-script text-2xl sm:text-4xl text-[#B4234D] font-normal">
                          — Siddharth
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 9 — FINAL SECTION */}
            {/* ========================================================================= */}
            <section
              id="final"
              className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FAD1DC] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Soft ambient aura */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-gradient-to-tr from-[#FFF4F6]/70 via-[#F3A6B9]/30 to-[#FFF0F3]/60 blur-3xl" />
              </div>

              <div className="max-w-3xl mx-auto w-full flex flex-col items-center relative z-10">
                <SectionDivider />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1 }}
                  className="w-full flex flex-col items-center"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C76A82] font-medium block mb-4">
                    Just One Last Thing
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-8 tracking-tight">
                    Ruchika, You Matter To Me.
                  </h2>

                  {/* Intro Subtext */}
                  <div className="space-y-4 mb-10 text-base sm:text-lg text-[#4A1527] max-w-xl mx-auto font-serif leading-relaxed">
                    <p className="italic text-[#8E5365]">
                      “I know one apology can't undo the moment that hurt you.”
                    </p>
                    <p className="text-sm sm:text-base text-[#4A1527]">
                      But I want you to know that I'm not taking your feelings lightly.
                    </p>
                    <div className="p-5 rounded-2xl bg-white/50 border border-[rgba(180,35,77,0.10)] backdrop-blur-md text-sm sm:text-base text-[#4A1527] space-y-1.5 shadow-xs font-sans">
                      <p>I care about you.</p>
                      <p>I care about how you feel.</p>
                      <p className="font-medium text-[#B4234D]">
                        And I care about becoming someone who makes you feel respected, understood, and safe.
                      </p>
                    </div>
                  </div>

                  {/* Small Elegant Divider / Heart */}
                  <div className="flex items-center justify-center gap-3 my-4 opacity-70">
                    <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#E85D7A]/50" />
                    <Heart className="w-3.5 h-3.5 text-[#E85D7A] fill-[#F3A6B9]" />
                    <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#E85D7A]/50" />
                  </div>

                  {/* Highlighted Message */}
                  <div className="glass-card-pink p-7 sm:p-9 my-8 text-left max-w-2xl mx-auto space-y-3.5 bg-white/70">
                    <p className="font-serif italic text-base sm:text-lg text-[#B4234D] font-medium">
                      “I don't want this website to convince you of anything.”
                    </p>
                    <p className="text-sm sm:text-base text-[#4A1527] leading-relaxed">
                      I just want it to remind you that behind all the mistakes, there is someone who genuinely cares about you and is willing to learn from them.
                    </p>
                    <div className="pt-2 border-t border-[#E85D7A]/15">
                      <p className="text-sm sm:text-base font-medium text-[#7B2943]">
                        You deserve kindness from me — especially when things aren't easy.
                      </p>
                    </div>
                  </div>

                  {/* FINAL PERSONAL MESSAGE (Letter-Style Centerpiece) */}
                  <div className="letter-paper-pink relative p-8 sm:p-14 my-10 text-left w-full max-w-2xl mx-auto shadow-xl">
                    {/* Wax Seal Accent */}
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#B4234D] to-[#4A1527] flex items-center justify-center text-[#FAD1DC] shadow-md border border-[#F3A6B9]/40">
                        <span className="font-serif italic font-bold text-base sm:text-lg">S</span>
                      </div>
                    </div>

                    <div className="space-y-5 text-[#4A1527] font-serif text-base sm:text-lg leading-relaxed pt-2">
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C76A82] font-semibold">
                        Ruchika,
                      </p>

                      <p>
                        I'm not asking you to forget what happened.
                      </p>

                      <p>
                        I'm not asking you to suddenly be okay.
                      </p>

                      <p>
                        I'm not asking you to give me an answer right now.
                      </p>

                      <p>
                        I just wanted to put into words what I sometimes fail to say properly.
                      </p>

                      <p className="italic text-[#B4234D]">
                        I'm genuinely sorry for hurting you.
                      </p>

                      <p>
                        And if I ever get the chance to make things right, I don't want to do it with promises.
                      </p>

                      <p className="font-medium text-[#4A1527]">
                        I want to do it with my actions.
                      </p>

                      <p className="pt-2 text-sm font-sans tracking-wide text-[#8E5365]">
                        Take care of yourself.
                      </p>

                      <div className="pt-6 flex flex-col items-end">
                        <div className="w-24 h-[1px] bg-[#E85D7A]/30 mb-3" />
                        <p className="font-script text-3xl sm:text-4xl text-[#B4234D] font-normal">
                          — Siddharth
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FINAL CLOSING */}
                  <div className="space-y-2 my-8 text-center max-w-lg mx-auto">
                    <p className="font-serif text-lg sm:text-xl text-[#4A1527] font-medium">
                      Whatever you choose, I will respect it.
                    </p>
                    <p className="font-serif italic text-sm sm:text-base text-[#8E5365]">
                      Because caring about you also means respecting you.
                    </p>
                  </div>

                  {/* Button */}
                  <motion.button
                    onClick={() => setIsClosed(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/85 border border-[#E85D7A]/40 text-[#B4234D] text-sm font-medium tracking-wider shadow-sm hover:border-[#E85D7A] hover:bg-white transition-all duration-300 backdrop-blur-md mt-4"
                  >
                    <span>With Care, Always</span>
                    <span className="text-[#E85D7A] group-hover:scale-110 transition-transform">♡</span>
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 text-center text-[10px] sm:text-[11px] text-[#8E5365]/80 font-sans tracking-[0.25em] uppercase bg-[#FAD1DC]">
              <p>For you, with all my sincerity.</p>
            </footer>
          </motion.main>
        ) : (
          /* ========================================================================= */
          /* TRANQUIL CLOSING VIEW */
          /* ========================================================================= */
          <motion.div
            key="closed-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[#FFF4F6] via-[#FCE7EC] to-[#FAD1DC] text-center"
          >
            {/* Soft background aura */}
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#F3A6B9]/40 blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="relative z-10 max-w-md mx-auto space-y-8"
            >
              <div className="w-12 h-12 rounded-full bg-white/80 border border-[#E85D7A]/40 flex items-center justify-center mx-auto text-[#E85D7A] shadow-xs backdrop-blur-md">
                <Heart className="w-5 h-5 fill-[#FAD1DC]" />
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#4A1527] font-normal tracking-tight">
                  Take care, Ruchika.
                </h2>
                <p className="font-serif italic text-lg sm:text-xl text-[#8E5365]">
                  That's all I wanted to say.
                </p>
                <p className="font-script text-3xl sm:text-4xl text-[#B4234D] font-normal pt-2">
                  — Siddharth
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={handleReopen}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E5365] hover:text-[#4A1527] transition-colors py-2 px-4 rounded-full hover:bg-white/60 backdrop-blur-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Read Again</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
