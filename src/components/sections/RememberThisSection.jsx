import React from 'react';
import { m } from 'framer-motion';
import { Sparkles, Feather, Flower2, Clock } from 'lucide-react';
import SectionDivider from '../SectionDivider';

export default function RememberThisSection() {
  return (
    <section
      id="remember-this"
      className="relative py-12 sm:py-24 px-5 sm:px-6 bg-[#FFF1F4] flex flex-col items-center text-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        <SectionDivider />

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#4A1527] mb-8 sm:mb-12 tracking-tight">
            Please Remember This.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
            {/* Card 1 */}
            <m.div
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
            </m.div>

            {/* Card 2 */}
            <m.div
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
            </m.div>

            {/* Card 3 */}
            <m.div
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
            </m.div>

            {/* Card 4 */}
            <m.div
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
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
