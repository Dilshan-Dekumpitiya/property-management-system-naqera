'use client';

import { Dispatch, SetStateAction, useState } from 'react';

interface FloatingActionBarProps {
  status: string,
  setStatus: Dispatch<SetStateAction<'Book now' | 'Naqera'>>; 
}

export default function FloatingActionBar({ status, setStatus }: FloatingActionBarProps) {
  // const [view, setView] = useState<ViewMode>('list');

  return (
    // Responsive wrapper: Fixed at bottom on mobile, normal position on desktop
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:static md:bottom-auto md:px-0">
      
      {/* Outer Floating Container - Added max-w to ensure it doesn't get too wide */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-full md:rounded-t-none md:rounded-b-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.1)] border border-gray-100/80 backdrop-blur-sm">
        {/* Right Section: Booking Pill Track */}
        {/* Removed fixed vw width; used flex shrink to ensure it stays in one line */}
        <div className="flex items-center bg-gray-100/80 p-1 rounded-full shrink-0">
          <button
            onClick={() => { setStatus('Book now') }}
            className={`
            ${status === 'Book now' ? 'bg-[#2D3182] rounded-full text-white font-semibold' : 'font-medium text-slate-600'}
            text-xs px-4 py-2 md:px-5 md:py-2.5`}>
            Book now
          </button>

          <button
            onClick={() => { setStatus('Naqera') }}
            className={`
            ${status === 'Naqera' ? 'bg-black text-white font-semibold rounded-full' : 'font-medium text-slate-600 whitespace-nowrap'}
            px-4 py-2 md:px-5 md:py-2.5 text-xs
            `}>
            Naqera
          </button>
        </div>

      </div>
    </div>
  );
}