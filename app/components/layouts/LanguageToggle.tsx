'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Language = 'EN' | 'AR';

export default function LanguageToggle() {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <button
      onClick={toggleLanguage}
      // Adjusted padding to p-1 so the height math works perfectly with h-10
      className="relative w-20 h-10 bg-gray-100/70 rounded-full p-1 flex items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] cursor-pointer select-none focus:outline-none"
      aria-label={`Switch language. Current: ${lang}`}
    >
      {/* Background Track Text - Adjusted px-4 so text is centered in empty space */}
      <div className="absolute inset-0 flex justify-between items-center px-3.5 pointer-events-none">
        <span className={`text-xs font-bold transition-opacity duration-300 ${lang === 'AR' ? 'opacity-100 text-gray-400' : 'opacity-0'}`}>
          EN
        </span>
        <span className={`text-xs font-bold transition-opacity duration-300 ${lang === 'EN' ? 'opacity-100 text-gray-400' : 'opacity-0'}`}>
          AR
        </span>
      </div>

      <motion.div
        // Adjusted to w-8 h-8 to fit beautifully inside the 40px height container with 4px padding
        className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] z-10"
        animate={{
          // Corrected Math: 80(width) - 8(padding) - 32(circle width) = 40
          x: lang === 'EN' ? 0 : 40,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {lang === 'EN' ? (
          <svg className="w-full h-full rounded-full shadow-inner" viewBox="0 0 512 512">
            <mask id="a">
              <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
              <path d="M0 0h512v512H0z" fill="#012169" />
              <path d="M0 0l512 512M512 0L0 512" stroke="#fff" strokeWidth="60" />
              <path d="M0 0l512 512M512 0L0 512" stroke="#c8102e" strokeWidth="40" />
              <path d="M256 0v512M0 256h512" stroke="#fff" strokeWidth="100" />
              <path d="M256 0v512M0 256h512" stroke="#c8102e" strokeWidth="60" />
            </g>
          </svg>
        ) : (
          <svg className="w-full h-full rounded-full shadow-inner" viewBox="0 0 512 512">
            <mask id="b">
              <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#b)">
              <path d="M0 0h512v512H0z" fill="#006c35" />
              <path
                d="M130 220c30-10 60 10 90-10s40-30 80-10 60 20 82 0M110 270h292M210 270l40 40 110-110"
                stroke="#fff"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </svg>
        )}
      </motion.div>
    </button>
  );
}