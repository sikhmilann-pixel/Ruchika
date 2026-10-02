import React from 'react';
import { m } from 'framer-motion';
import SectionDivider from '../SectionDivider';

export default function RememberSection() {
  return (
    <section
      id="remember"
      className="relative py-14 sm:py-24 px-5 sm:px-6 bg-[#FFF7F8] flex flex-col items-center text-center"
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-8 sm:mb-10 tracking-tight">
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
        </m.div>
      </div>
    </section>
  );
}
