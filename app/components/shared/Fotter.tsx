'use client';

import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    // Outer container with the dark navy background
    <footer className="bg-[#212349] w-full pt-16 pb-8 px-6 md:px-12 lg:px-24">
      
      {/* Top Section: 3 Columns on Desktop, Stacking on Mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        
        {/* Column 1: Contact Info (Spans 4 columns on large screens) */}
        <div className="flex gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-white mt-1 stroke-[1.5]" />
              <div>
                <p className="text-white text-sm font-medium">Tel</p>
                <p className="text-gray-300 text-sm mt-1">966 310 437 2766</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-white mt-1 stroke-[1.5]" />
              <div>
                <p className="text-white text-sm font-medium">Mail</p>
                <p className="text-gray-300 text-sm mt-1">info@naqera.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-white mt-1 stroke-[1.5]" />
              <div>
                <p className="text-white text-sm font-medium">Address</p>
                <p className="text-gray-300 text-sm mt-1">706 Campfire Ave Meriden, CT 06042</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Printer className="w-5 h-5 text-white mt-1 stroke-[1.5]" />
              <div>
                <p className="text-white text-sm font-medium">FAX</p>
                <p className="text-gray-300 text-sm mt-1">+1 1321 0321</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {[
              'About us',
              'Contact Us',
              'Privacy Policy',
              'Cancellation Policy',
              'Help Center',
              'Host Policy',
            ].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-white text-sm underline underline-offset-4 decoration-white/70 hover:decoration-white transition-colors w-fit"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter (Spans 5 columns on large screens) */}
        <div className="flex flex-col justify-start">
          <h3 className="text-white text-xl font-semibold mb-2">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Be the first one to know about discounts, offers and events
          </p>
          
          {/* Input and Button grouped - Stacked on tiny screens, inline on larger */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter Your Mail" 
              className="flex-1 bg-white px-6 py-3.5 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 focus:ring-white/50"
            />
            <button className="bg-[#C86A58] hover:bg-[#B35948] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap shadow-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section: Divider, Logo, and Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Replace this with an <Image /> tag if you have the actual logo file */}
        <span className="text-2xl font-bold text-white tracking-wide lowercase">
          naqera
        </span>
        <span className="text-gray-400 text-sm">
          © 2026 Naqera, All Rights Reserved
        </span>
      </div>

    </footer>
  );
}