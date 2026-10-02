import React from 'react';

export default function SectionDivider({ dark = false, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-5 sm:my-8 opacity-70 ${className}`}>
      <div className={`h-[1px] w-10 sm:w-20 ${dark ? 'bg-gradient-to-r from-transparent to-[#F3A6B9]/50' : 'bg-gradient-to-r from-transparent to-[#E85D7A]/40'}`} />
      <div className={`w-1.5 h-1.5 rotate-45 ${dark ? 'bg-[#F3A6B9]' : 'bg-[#E85D7A]'}`} />
      <div className={`h-[1px] w-10 sm:w-20 ${dark ? 'bg-gradient-to-l from-transparent to-[#F3A6B9]/50' : 'bg-gradient-to-l from-transparent to-[#E85D7A]/40'}`} />
    </div>
  );
}
