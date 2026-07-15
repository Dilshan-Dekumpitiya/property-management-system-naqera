'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Calendar, Minus, Plus, Star, ShieldCheck, CalendarDays } from 'lucide-react';

export default function CheckoutStepOne() {
  // Guest count state management
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
          <span className="cursor-pointer hover:text-gray-900">Home</span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="cursor-pointer hover:text-gray-900 truncate max-w-[150px] md:max-w-none">
            Beachfront Studio at...
          </span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-[#313583] font-semibold">Checkout Step 1</span>
        </nav>

        {/* 3. Columns Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Checkout Form Configuration (Spans 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 2. Page Header & Progress Line */}
            <div className="mb-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Review your trip</h1>
              {/* Progress bar line */}
              <div className="w-full h-[5px] bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#313583] rounded-full" />
              </div>
            </div>
            
            {/* Step Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm animate-slide-in-left">
              
              {/* Card Title */}
              <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-4">
                <CalendarDays className="w-5 h-5 text-blue-800" />
                <h2 className="text-md font-bold text-gray-900">1. Review Dates & Guests</h2>
              </div>

              {/* Check-in / Out Times display */}
              <div className="flex justify-between items-center mb-8 max-w-full">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-in Time</p>
                  <p className="text-md font-bold text-gray-900">04:00 PM</p>
                </div>
                <div className="flex-1 max-w-[80px] h-px bg-gray-200 mx-4"></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-out Time</p>
                  <p className="text-md font-bold text-gray-900">12:00 PM</p>
                </div>
              </div>

              {/* Date Box Selectors */}
              <div className="grid grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden mb-8">
                <div className="p-4 border-r border-gray-200 hover:bg-gray-50/50 cursor-pointer transition-colors">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-in</p>
                  <p className="text-sm text-gray-400 font-bold ">Add date</p>
                </div>
                <div className="p-4 hover:bg-gray-50/50 cursor-pointer transition-colors">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-out</p>
                  <p className="text-sm font-bold text-gray-500">Add date</p>
                </div>
              </div>

              {/* Guest Counters Row Container */}
              <div className="flex flex-col gap-5 border border-gray-100 p-5 rounded-2xl bg-white">
                
                {/* Adults Count */}
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Adults</h4>
                    <p className="text-xs text-gray-400 font-medium">Age 13+</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center font-bold text-gray-900 text-sm">{adults}</span>
                    <button 
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                {/* Children Count */}
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Children</h4>
                    <p className="text-xs text-gray-400 font-medium">Ages 2-12</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center font-bold text-gray-900 text-sm">{children}</span>
                    <button 
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Action Bottom Button */}
            <button className="w-full bg-[#8F94C6] hover:bg-[#7b80b3] text-white font-bold py-4 rounded-2xl transition-all shadow-sm animate-slide-in-left">
              Next: Review Pricing
            </button>
          </div>

          {/* RIGHT COLUMN: Sticky Side Widget Preview Panel (Spans 5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6 w-[27vw]">
            
            {/* Property Minimal Preview Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden mb-4">
                <Image 
                  src="/property1.webp" // Swap out dynamic file path asset
                  alt="Beachfront Studio"
                  fill
                  className="object-cover"
                />
                {/* Micro Badge Overlay */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  Guest Favourite
                </span>
              </div>

              <div className="px-5 pb-2">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">Beachfront Studio at Corniche</h3>
                <p className="text-xs text-gray-400 font-medium mb-3">Studio · Jeddah</p>
                
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.8</span>
                  <span className="text-gray-400 font-medium">(47)</span>
                </div>

                <div className="pt-3">
                  <p className="text-xs text-gray-500 font-medium">
                    Hosted by <span className="text-gray-800 font-bold">Layla Al-Juhani</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Naqera Shield Trust Protection Frame */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-3">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Naqera Trust Guarantee</h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-full font-medium">
                Get what you booked or your money back. We're here for you 24/7.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}