'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { CompactPropertyProps } from '@/app/lib/types';

export default function CompactPropertyCard({ 
  title = "Premium Commercial...", 
  location = "Jeddah, Al...", 
  price = 0, 
  type = "Shop", 
  imageUrl = "/mock-shop.jpg"
}: Partial<CompactPropertyProps>) {
  
  return (
    <div className="group flex flex-col bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
      
      {/* Top: Image & Badge */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Type Badge - Absolute positioned over the image */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#313583] text-white px-4 py-1.5 text-[10px] font-bold rounded-xl shadow-sm">
            {type}
          </span>
        </div>
      </div>

      {/* Bottom: Details Section */}
      <div className="p-5 flex flex-col gap-2.5">
        
        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 truncate group-hover:text-[#313583] transition-colors">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 text-[9px]">
          <MapPin className="w-3 h-3 stroke-[1.5]" />
          <span className="truncate">{location}</span>
        </div>

        {/* Price */}
        <div className="mt-1">
          <p className="text-sm font-bold text-[#313583]">
            SAR {price}
          </p>
        </div>
        
      </div>
    </div>
  );
}