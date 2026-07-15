import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { PropertyHorizontal } from '@/app/lib/types';

export default function PropertyHorizontalCard({ property }: { property: PropertyHorizontal }) {
  return (
    <div className="group relative flex flex-col md:flex-row bg-white rounded-2xl hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 w-full mb-4">
      
      {/* 1. Image Section (Left side on desktop, Top on mobile) */}
      <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 min-h-[240px] md:min-h-full overflow-hidden">
        <Image 
          src={property.imageUrl} 
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-black text-white px-3 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase shadow-sm">
            {property.type}
          </span>
        </div>
        
        {/* Favorite Button (Requires z-20 to sit above the absolute Link overlay) */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Handle save logic
          }}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white z-20 transition-colors cursor-pointer"
        >
          <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* 2. Content Section (Right side on desktop, Bottom on mobile) */}
      <div className="flex flex-col p-6 w-full flex-grow">
        
        {/* Header */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-900 transition-colors">
          {property.title}
        </h3>
        
        {/* Location & Distance */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <MapPinIcon className="w-4 h-4" />
          <span className="truncate">{property.location}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-400">{property.distance}</span>
        </div>

        {/* Description (Truncated to 2 lines) */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
          {property.description}
        </p>

        {/* Available Options Pills */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Available Options
          </p>
          <div className="flex flex-wrap gap-2">
            {property.options.map((option, idx) => (
                <span 
                key={idx} 
                className="cursor-pointer transition-colors duration-300 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-lg hover:bg-black hover:text-white"
                >
                {option}
                </span>
            ))}
            </div>
        </div>

        {/* Footer: Specs & Price */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-50 gap-4">
          
          {/* Specs */}
          <div className="flex items-center text-xs font-medium text-gray-400">
            <span>{property.specs.beds} Beds</span>
            <span className="mx-2 text-gray-300">•</span>
            <span>{property.specs.baths} Baths</span>
            <span className="mx-2 text-gray-300">•</span>
            <span>{property.specs.sqft} sqft</span>
          </div>

          {/* Price & The Stretched Navigation Link */}
          <div className="text-right">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Starting From
            </p>
            
            {/* This is the single active HTML link.
              The empty span stretches over the whole relative card container.
            */}
            <div
            className="text-2xl font-black text-gray-900 group-hover:text-indigo-900 transition-colors"
            >
            <span className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />
            
            {property.currency} {property.price.toLocaleString()}
            <span className="text-xs font-medium text-gray-500 ml-1">/ {property.period}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}