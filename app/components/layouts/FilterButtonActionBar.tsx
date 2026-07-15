'use client';
import { filterButtons } from "@/app/lib/data";
import { useState } from "react";
import SearchBar from "../shared/SearchBar";
import { motion } from 'framer-motion';
import { Map, List } from 'lucide-react';

type ViewMode = 'map' | 'list';

const FilterButtonActionBar = () => { 
    const [activatedId, setActivatedId] = useState('1')
    const [view, setView] = useState<ViewMode>('list');
    
    return (
        <div className="flex flex-col gap-4 px-4 py-4 bg-white shadow-sm md:flex-row md:items-center md:justify-between md:px-10 md:py-5">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none md:gap-3 md:pb-0">
                {filterButtons.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => { setActivatedId(item.id)}}
                        className={ `h-9 px-3 text-xs font-medium rounded-full flex items-center gap-1.5 whitespace-nowrap transition-colors hover:cursor-pointer
                        md:h-10 md:px-4 md:text-sm md:gap-2
                        ${activatedId === item.id ? `bg-[#f15f52] text-white` : `bg-gray-100 hover:bg-gray-50`}`}
                    >
                        <item.icon className={ `w-4 h-4 md:w-5 md:h-5 ${activatedId === item.id ? `text-white` : `text-gray-500`}`} />
                        <span>{item.name}</span>
                    </button>
                ))}
            </div>

            {/* FIX 1: Added flex and justify-center to center the toggle on mobile */}
            <div className="w-full flex justify-center md:w-auto md:justify-end">
                {/* <SearchBar/> */}
                
                {/* FIX 2: Changed to inline-flex and w-fit so it stops stretching to full width */}
                <div className="relative inline-flex w-fit bg-gray-100/80 p-1 rounded-full items-center">
                    
                    <motion.div
                        layout
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        style={{
                            left: view === 'map' ? '4px' : 'calc(50% + 1px)',
                            right: view === 'map' ? 'calc(50% + 1px)' : '4px',
                        }}
                    />

                    <button
                        onClick={() => setView('map')}
                        className={`relative z-10 p-2 rounded-full transition-colors focus:outline-none ${
                        view === 'map' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'
                        }`}
                        aria-label="Switch to Map View"
                    >
                        <Map className="w-5 h-5 stroke-[1.8]" />
                    </button>

                    <button
                        onClick={() => setView('list')}
                        className={`relative z-10 p-2 rounded-full transition-colors focus:outline-none ${
                        view === 'list' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'
                        }`}
                        aria-label="Switch to List View"
                    >
                        <List className="w-5 h-5 stroke-[1.8]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterButtonActionBar;