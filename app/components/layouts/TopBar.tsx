'use client';

import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import { Bell, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import SearchBar from "../shared/SearchBar";

const TopBar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="flex flex-wrap justify-between items-center px-4 py-3 md:px-10 md:py-5">
                
                <div className="flex-shrink-0 order-1">
                    <Image
                        src={'/logo.webp'}
                        alt={'logo'}
                        width={120} 
                        height={120}
                        className="w-[90px] md:w-[150px] h-auto"
                    />
                </div>

                <div className="w-full order-3 mt-3 md:mt-0 md:order-2 md:w-[30vw] lg:w-[25vw]">
                    <SearchBar/>
                </div>

                <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-6 order-2 md:order-3">
                    
                    <Link href={'/'} className="flex items-center justify-center">
                        <button className="flex items-center justify-center hover:cursor-pointer group">
                            <Heart className="w-5 h-5 md:w-7 md:h-7 group-hover:text-blue-800 transition-colors" />
                        </button>
                    </Link>

                    <Link href={'/notifications'} className="flex items-center justify-center">
                        <button className="flex items-center justify-center hover:cursor-pointer group">
                            <Bell className="w-5 h-5 md:w-7 md:h-7 group-hover:text-blue-800 transition-colors" />
                        </button>
                    </Link>

                    <button className="flex items-center justify-center hover:cursor-pointer group">
                        <MessageCircle className="w-5 h-5 md:w-7 md:h-7 group-hover:text-blue-800 transition-colors" />
                    </button>

                    <div className="scale-90 md:scale-100 origin-right">
                        <LanguageToggle/>
                    </div>
                    
                    <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                        <img 
                            src="https://i.pravatar.cc/150?img=11" 
                            alt="account" 
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TopBar;