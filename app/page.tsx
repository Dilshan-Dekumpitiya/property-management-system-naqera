'use client'
import PropertyCard from '@/app/components/shared/PropertyCard';
import { Property } from '@/app/lib/types';
import { mockProperties, mockPropertiesHorizontal } from './lib/data';
import FilterButtonActionBar from './components/layouts/FilterButtonActionBar';
import FloatingActionBar from './components/layouts/FloatingActionBar';
import { useState } from 'react';
import PropertyHorizontalCard from './components/shared/PropertyHorizontalCard';
import Link from 'next/link';

type Status = 'Book now' | 'Naqera'

export default function HomePage() {
  const [status, setStatus] = useState<Status>('Book now')

  return (
    <div className="min-h-screen pb-20 bg-gray-100">
      
      {/* 1. Fixed directly below the TopBar. Added bg-gray-100 to cover background scrolls */}
      <div className="fixed top-[117px] md:top-[81px] left-0 right-0 z-40 pb-4">
          <FilterButtonActionBar />
          <div className="flex justify-center items-center">
            <FloatingActionBar status={ status } setStatus={(newStatus) => setStatus(newStatus)}/>
          </div>
      </div>
        
      {/* 2. Added top padding to push the property cards down past the fixed filter bar */}
      {/* Adjust pt-[180px] (mobile) and md:pt-[140px] (desktop) to match the height of your Filter action bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[180px] md:pt-[170px]">
        {/* Property Grid */}
        {status === 'Book now' && (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        )}

        {status === 'Naqera' && (
          <div className="flex flex-col gap-4 max-w-[85vw] mx-auto">
            {mockPropertiesHorizontal.map((property) => (
              <Link
              key={property.id}
              href={`/properties/${property.id}`}
              >
                <PropertyHorizontalCard key={property.id} property={property} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}