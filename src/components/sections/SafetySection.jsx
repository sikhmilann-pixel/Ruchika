import React from 'react';
import { m } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionDivider from '../SectionDivider';

export default function SafetySection() {
  return (
    <section
      id="safety"
      className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FCE7EC] flex flex-col items-center text-center"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        <SectionDivider />

        <m.div
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
        </m.div>
      </div>
    </section>
  );
}
