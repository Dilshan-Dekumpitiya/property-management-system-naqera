'use client';

import Image from 'next/image';
import { 
    Heart, Star, MapPin, BedDouble, Bath, Maximize, 
  ShieldCheck, Clock, BadgeCheck, CheckCircle2, Bed, Sofa, 
  Share2,
  ExternalLink
} from 'lucide-react';
import { mockProperties } from '@/app/lib/data';
import CompactPropertyCard from '@/app/components/shared/CompactPropertyCard';
import Link from 'next/link';
// import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function PropertyOverview() {
  return (
    <main className="min-h-screen pb-6 bg-gray-100 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6 font-medium">
          Home <span className="mx-2">/</span> <span className="text-gray-900">Beachfront Studio at Corniche</span>
        </div>

        {/* 2. Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Beachfront Studio at Corniche</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-900 font-bold">4.8</span>
                <span className="text-gray-500 underline">(47 reviews)</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Jeddah, Co..., Saudi Arabia</span>
              </div>
            </div>

            {/* Property Specs Pills */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-2 bg-gray-100/80 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700">
                <BedDouble className="w-4 h-4" /> 1 Bed
              </div>
              <div className="flex items-center gap-2 bg-gray-100/80 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700">
                <Bath className="w-4 h-4" /> 1 Bath
              </div>
              <div className="flex items-center gap-2 bg-gray-100/80 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700">
                <Maximize className="w-4 h-4" /> 620 sqft
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Heart className="w-4 h-4" /> Save
            </button>
          </div>
        </div>

        {/* 3. Hero Image Gallery */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm hover:cursor-pointer group">
          <Image 
            src="/property1.webp" // Replace with your actual property image
            alt="Beachfront Studio"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-gray-900/70 backdrop-blur-md text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider">
              Featured Home
            </span>
          </div>
          <button className="absolute bottom-6 right-6 bg-gray-900/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-900 transition-colors">
            <Maximize className="w-4 h-4" /> 1 / 1
          </button>
        </div>

        {/* 4. Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Property Details (Spans 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Host Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Hosted by Layla Al-Juhani</h2>
                  <p className="text-sm text-gray-500">Superhost • 1 year hosting</p>
                </div>
                <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-400">
                  L
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-50">
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-900 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Naqera Shield</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Secure payment and guest protection included.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Fast Response</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Usually responds within an hour.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BadgeCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Identity Verified</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Host has completed our rigorous verification.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About this space */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">About this space</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Escape to this stunning beachfront studio perched directly on Jeddah's famous Corniche.
              </p>
            </div>

            {/* What this place offers */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                {[
                  'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Smart TV', '24/7 Security', 'Balcony', 'Sea View'
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Where you'll sleep */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Where you'll sleep</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="border border-gray-100 p-4 rounded-xl">
                  <Bed className="w-6 h-6 text-gray-700 mb-3" />
                  <h4 className="text-sm font-bold text-gray-900">Bedroom</h4>
                  <p className="text-xs text-gray-500">1 double bed</p>
                </div>
                <div className="border border-gray-100 p-4 rounded-xl">
                  <Sofa className="w-6 h-6 text-gray-700 mb-3" />
                  <h4 className="text-sm font-bold text-gray-900">Living Room</h4>
                  <p className="text-xs text-gray-500">1 sofa bed</p>
                </div>
              </div>
            </div>

            {/* Where you'll be (Map) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Where you'll be</h2>
              </div>
              <div className="flex items-center justify-between gap-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" /> Corniche, Jeddah, Saudi Arabia
                </div>
                    <button className="text-indigo-800 text-sm font-bold hover:underline flex gap-2 items-center justify-center hover:cursor-pointer">Open in Maps
                        <ExternalLink className="w-4 h-4" />
                    </button>
              </div>
              
              {/* Fake Map Container */}
                <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative mb-4">
                    <Image src="/fakeMap.png" alt="Map View" fill className="object-cover" />
                </div>
              {/* <div className="w-full h-64 rounded-xl overflow-hidden relative mb-4">
                    <GoogleMapsEmbed
                        apiKey="YOUR_GOOGLE_MAPS_API_KEY"
                        height={256} // matches h-64 (256px)
                        width="100%"
                        mode="place"
                        q="Corniche, Jeddah, Saudi Arabia" // Pass your dynamic location string here
                        zoom="14"
                    />
                </div> */}
              <p className="text-xs text-gray-500 font-medium">Exact location provided after booking.</p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-gray-900 fill-current" />
                <h2 className="text-lg font-bold text-gray-900">4.8 • 47 reviews</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((review) => (
                  <div key={review} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-400">J</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Guest Name</h4>
                        <p className="text-xs text-gray-500">March 2024</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      "Exceptional place! The attention to detail and prime location made our stay truly comfortable and memorable. Very easy communication with the host."
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Bottom Section: Similar Places */}
            <div className="border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Similar places you might like</h2>
                {/* Note: You can drop in your existing PropertyCard map loop here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {mockProperties.map((property) => (
                        <CompactPropertyCard key={property.id} title={property.title} location={property.location} price={property.price} type={property.type} imageUrl={ property.imageUrl} />
                    ))}
                </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Sticky Reservation Widget (Spans 4 cols) */}
          <div className="lg:col-span-4">
            
            {/* The sticky wrapper. top-32 accounts for your sticky TopBar */}
            <div className="sticky top-32 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6 space-y-6">
                <div>
                  <span className="text-2xl font-bold text-gray-900">SAR 750</span>
                  <span className="text-sm text-gray-500 ml-1">night</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium">
                  <Star className="w-3.5 h-3.5 text-gray-900 fill-current" />
                  <span className="text-gray-900 font-bold">4.8</span>
                  <span className="text-gray-400 underline">47 reviews</span>
                </div>
              </div>

              {/* Check-in / out times */}
              <div className="flex justify-between items-center mb-6 text-center space-y-4">
                <div className="pt-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-in Time</p>
                  <p className="text-lg font-bold text-gray-900">04:00 PM</p>
                </div>
                <div className="w-8 h-px bg-gray-200"></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Check-out Time</p>
                  <p className="text-lg font-bold text-gray-900">12:00 PM</p>
                </div>
              </div>

              {/* Inputs Wrapper */}
              <div className="border border-gray-200 rounded-xl mb-6 overflow-hidden">
                {/* Dates Row */}
                <div className="flex border-b border-gray-200 divide-x divide-gray-200">
                  <div className="flex-1 p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-in</p>
                    <p className="text-sm text-gray-400">Add date</p>
                  </div>
                  <div className="flex-1 p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Check-out</p>
                    <p className="text-sm text-gray-400">Add date</p>
                  </div>
                </div>
                {/* Guests Row */}
                <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Guests</p>
                    <p className="text-sm font-bold text-gray-900">1 Guest</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors">-</button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors">+</button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/checkout/1`}
              >
                    <button
                      onClick={() => { }}
                      className="w-full bg-[#2D3182] hover:bg-[#333779] hover:cursor-pointer text-white font-bold py-4 mt-3 rounded-xl transition-colors mb-4">
                      Reserve
                    </button>
              </Link>
              <p className="text-center text-xs text-gray-400 mb-10">You won't be charged yet</p>

              {/* Price Breakdown */}
              <div className="flex flex-col gap-3 text-sm text-gray-600 border-b border-gray-100 pb-6 mb-6">
                <div className="flex justify-between">
                  <span className="underline">SAR 750 x 5 nights</span>
                  <span>SAR 3,750</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Naqera service fee</span>
                  <span>SAR 450</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Taxes</span>
                  <span>SAR 216</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center font-bold text-gray-900">
                <span>Total</span>
                <span className="text-lg">SAR 4,529</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}