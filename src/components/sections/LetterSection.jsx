import React from 'react';
import { m } from 'framer-motion';
import SectionDivider from '../SectionDivider';

export default function LetterSection() {
  return (
    <section
      id="letter"
      className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FFF7F8] flex flex-col items-center"
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
          <div className="text-center mb-6 sm:mb-10">
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
        </m.div>
      </div>
    </section>
  );
}
