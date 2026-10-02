import React from 'react';
import { m } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionDivider from '../SectionDivider';

export default function FinalSection({ onOpenCloseScreen }) {
  return (
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

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center"
        >
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
          <m.button
            onClick={onOpenCloseScreen}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/85 border border-[#E85D7A]/40 text-[#B4234D] text-sm font-medium tracking-wider shadow-sm hover:border-[#E85D7A] hover:bg-white transition-all duration-300 backdrop-blur-md mt-4 cursor-pointer"
          >
            <span>With Care, Always</span>
            <span className="text-[#E85D7A] group-hover:scale-110 transition-transform">♡</span>
          </m.button>
        </m.div>
      </div>
    </section>
  );
}
