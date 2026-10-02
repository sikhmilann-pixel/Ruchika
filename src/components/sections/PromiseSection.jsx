import React from 'react';
import { m } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionDivider from '../SectionDivider';

export default function PromiseSection() {
  return (
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

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full"
        >
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
            <m.div
              className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E85D7A] to-transparent mt-6 sm:mt-8"
              animate={{ opacity: [0.35, 0.9, 0.35], scaleX: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
