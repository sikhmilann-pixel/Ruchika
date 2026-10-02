import React from 'react';
import { m } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionDivider from '../SectionDivider';

export default function SorrySection() {
  return (
    <section
      id="sorry"
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
          <div className="inline-block mb-2 sm:mb-3">
            <Heart className="w-5 h-5 text-[#E85D7A] fill-[#FAD1DC] mx-auto" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#4A1527] mb-8 sm:mb-12 tracking-tight">
            I’m Sorry, Ruchika.
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto text-[#4A1527] text-base sm:text-lg leading-relaxed font-serif">
            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
            >
              I’m sorry for making you feel bad about yourself.
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
            >
              I’m sorry for using words that could make you question how I see you.
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
            >
              I’m sorry that my anger came out as something hurtful.
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[rgba(180,35,77,0.10)] backdrop-blur-md shadow-xs"
            >
              And I’m sorry that a few careless words made you feel like you weren't valued.
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 sm:mt-12 inline-block px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-white/65 border border-[#E85D7A]/30 shadow-xs backdrop-blur-md"
          >
            <p className="font-serif italic text-lg sm:text-2xl text-[#B4234D] font-medium tracking-wide">
              “You didn't deserve that.”
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
