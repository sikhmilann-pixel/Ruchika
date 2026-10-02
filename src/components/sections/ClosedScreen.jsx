import React from 'react';
import { m } from 'framer-motion';
import { Heart, RotateCcw } from 'lucide-react';

export default function ClosedScreen({ onReopen }) {
  return (
    <m.div
      key="closed-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[#FFF4F6] via-[#FCE7EC] to-[#FAD1DC] text-center"
    >
      {/* Soft background aura */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#F3A6B9]/40 blur-3xl pointer-events-none" />

      <m.div
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
            onClick={onReopen}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E5365] hover:text-[#4A1527] transition-colors py-2 px-4 rounded-full hover:bg-white/60 backdrop-blur-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Read Again</span>
          </button>
        </div>
      </m.div>
    </m.div>
  );
}
