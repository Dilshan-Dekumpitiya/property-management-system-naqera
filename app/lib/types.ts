import { LucideIcon } from "lucide-react";

export interface Property {
  id: string;
  title: string;
  type: string;
  featured: boolean;
  rating: number;
  location: string;
  distance: string;
  amenities: string[];
  price: number;
  currency: string;
  imageUrl: string;
}

export interface FilterButton { 
  id: string,
  name: string,
  icon: LucideIcon,
}

export interface CompactPropertyProps {
  title: string;
  location: string;
  price: number;
  type: string;
  imageUrl: string;
}

export interface PropertyHorizontal {
  id: string;
  title: string;
  type: string;
  location: string;
  distance: string;
  description: string;
  options: string[]; 
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  price: number;
  currency: string;
  period: string;
  imageUrl: string;
}