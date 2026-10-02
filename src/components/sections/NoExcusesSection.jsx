import React from 'react';
import { m } from 'framer-motion';
import SectionDivider from '../SectionDivider';

export default function NoExcusesSection() {
  return (
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

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#FFF4F6] mb-8 sm:mb-12 tracking-tight leading-snug">
            I Don't Want To Hide Behind <br className="hidden sm:inline" />
            <span className="italic text-[#F3A6B9]">‘I Was Angry.’</span>
          </h2>

          <div className="glass-card-darkrose rounded-3xl p-6 sm:p-14 space-y-6 sm:space-y-8 text-left max-w-2xl mx-auto">
            <m.div
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
            </m.div>

            <div className="w-full h-[1px] bg-white/10" />

            <m.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-2.5 sm:space-y-3 text-xs sm:text-base text-[#FFF4F6]/85 leading-relaxed"
            >
              <p>I should have controlled myself.</p>
              <p>I should have chosen silence instead of hurting you.</p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-2 text-center"
            >
              <span className="inline-block px-6 py-2 sm:px-7 sm:py-2.5 rounded-full bg-white/10 border border-white/20 text-[#FFF4F6] font-serif text-base sm:text-lg tracking-wide italic">
                That's on me.
              </span>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
