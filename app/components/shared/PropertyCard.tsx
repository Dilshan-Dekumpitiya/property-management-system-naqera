import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/app/lib/types';
import { HeartIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'; // Assuming Heroicons

export default function PropertyCard({ property }: { property: Property }) {
  return (
    /* 
      1. CHANGED: Converted outer Link to a relative 'div'. 
         It still keeps all of your hover transitions and group effects!
    */
    <div
      className="group relative flex flex-col bg-white rounded-2xl hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300"
    >
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={property.imageUrl} 
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {property.featured && (
            <span className="bg-white px-3 py-1 text-xs font-bold rounded-full shadow-sm">
              FEATURED
            </span>
          )}
          <span className="bg-indigo-900 text-white px-3 py-1 text-xs font-bold rounded-full shadow-sm">
            {property.type}
          </span>
        </div>
        
        {/* 
          2. CHANGED: Elevated Favorite Button to z-20 and handled click propagation.
             This ensures that clicking the heart doesn't trigger the card's navigation link!
        */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Handle your favorite functionality here (e.g., toggleWishlist)
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 z-20 transition-colors cursor-pointer"
        >
          <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-900 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-bold text-gray-700">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPinIcon className="w-4 h-4" />
          <span className="truncate">{property.location}</span>
          <span className="mx-1">•</span>
          <span>{property.distance}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md uppercase">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">
              +{property.amenities.length - 3}
            </span>
          )}
        </div>

        {/* Footer: Price & Link */}
        <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Start from</p>
            <p className="text-lg font-bold text-indigo-900">
              {property.currency} {property.price} <span className="text-[13px] font-normal text-gray-500">/ night</span>
            </p>
          </div>
          
          {/* 
            3. CHANGED: Added an invisible stretched overlay span inside this single Link. 
               This is now the only active link in the DOM, making the entire outer div clickable!
          */}
          <Link 
            href={`/properties/${property.id}`}
            className="text-indigo-800 text-[13px] font-bold hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {/* The magic overlay span */}
            <span className="absolute inset-0 z-0" aria-hidden="true" />
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}