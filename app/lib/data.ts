import { Building, Building2, Home, KeyboardMusic, TreePalm, Trees } from "lucide-react";
import { FilterButton, Property, PropertyHorizontal } from "./types";

export const filterButtons: FilterButton[] = [
    {
        id: '1',
        name: 'All',
        icon: Home
    },
    {
        id: '2',
        name: 'Appartment',
        icon: Building2
    },
    {
        id: '3',
        name: 'Villa',
        icon: Home
    },
    {
        id: '4',
        name: 'Hotel Appartment',
        icon: Building
    },
    {
        id: '5',
        name: 'Chalet',
        icon: Trees
    },
    {
        id: '6',
        name: 'Resort',
        icon: TreePalm
    },{
        id: '7',
        name: 'Studio',
        icon: KeyboardMusic
    }
]

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Beachfront Studio apartment',
    type: 'STUDIO',
    featured: true,
    rating: 4.8,
    location: 'Jeddah, Co...',
    distance: '870 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Pool'],
    price: 750,
    currency: 'SAR',
    imageUrl: '/property1.webp', 
  },
  {
    id: '2',
    title: 'Luxury Chalet in Al...',
    type: 'CHALET',
    featured: true,
    rating: 4.9,
    location: 'Abha, Al S...',
    distance: '1200 KM Away',
    amenities: ['Wi-Fi', 'Kitchen', 'Parking', 'Private Pool'],
    price: 620,
    currency: 'SAR',
    imageUrl: '/property2.webp', 
  },
  {
    id: '3',
    title: 'Grand Hotel...',
    type: 'HOTEL APARTMENT',
    featured: true,
    rating: 4.9,
    location: 'Mecca, Ajy...',
    distance: '820 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Room Service', 'Gym', 'TV', 'Kitchen'],
    price: 1200, // Kept as a raw integer; use .toLocaleString() in your UI to display as "1,200"
    currency: 'SAR',
    imageUrl: '/property3.webp', 
  },
  {
    id: '4',
    title: 'Beachfront Studio apartment',
    type: 'STUDIO',
    featured: true,
    rating: 4.8,
    location: 'Jeddah, Co...',
    distance: '870 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Pool'],
    price: 750,
    currency: 'SAR',
    imageUrl: '/property1.webp', 
  },
  {
    id: '5',
    title: 'Beachfront Studio apartment',
    type: 'STUDIO',
    featured: true,
    rating: 4.8,
    location: 'Jeddah, Co...',
    distance: '870 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Pool'],
    price: 750,
    currency: 'SAR',
    imageUrl: '/property1.webp', 
  },
  {
    id: '6',
    title: 'Luxury Chalet in Al...',
    type: 'CHALET',
    featured: true,
    rating: 4.9,
    location: 'Abha, Al S...',
    distance: '1200 KM Away',
    amenities: ['Wi-Fi', 'Kitchen', 'Parking', 'Private Pool'],
    price: 620,
    currency: 'SAR',
    imageUrl: '/property2.webp', 
  },
  {
    id: '7',
    title: 'Grand Hotel...',
    type: 'HOTEL APARTMENT',
    featured: true,
    rating: 4.9,
    location: 'Mecca, Ajy...',
    distance: '820 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Room Service', 'Gym', 'TV', 'Kitchen'],
    price: 1200, // Kept as a raw integer; use .toLocaleString() in your UI to display as "1,200"
    currency: 'SAR',
    imageUrl: '/property3.webp', 
  },
  {
    id: '8',
    title: 'Beachfront Studio apartment',
    type: 'STUDIO',
    featured: true,
    rating: 4.8,
    location: 'Jeddah, Co...',
    distance: '870 KM Away',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Pool'],
    price: 750,
    currency: 'SAR',
    imageUrl: '/property1.webp', 
  }
];

export const mockPropertiesHorizontal: PropertyHorizontal[] = [
  {
    id: '1',
    title: 'Beachfront Studio apartment',
    type: 'STUDIO',
    location: 'Jeddah, Co...',
    distance: '870 KM Away',
    description: 'Escape to this stunning beachfront studio perched directly on Jeddah’s famous Corniche. Enjoy breathtaking Red Sea views and premium amenities.',
    options: ['Sea View', 'Balcony', 'High-speed Wi-Fi'],
    specs: {
      beds: 1,
      baths: 1,
      sqft: 620
    },
    price: 750,
    currency: 'SAR',
    period: 'night',
    imageUrl: '/property1.webp', 
  },
  {
    id: '2',
    title: 'Luxury Chalet in Al...',
    type: 'CHALET',
    location: 'Abha, Al S...',
    distance: '1200 KM Away',
    description: 'A beautifully designed luxury chalet nestled in the cool mountains of Abha. Features expansive outdoor spaces perfect for family gatherings.',
    options: ['Private Pool', 'Mountain View', 'Outdoor BBQ'],
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1500
    },
    price: 620,
    currency: 'SAR',
    period: 'night',
    imageUrl: '/property2.webp', 
  },
  {
    id: '3',
    title: 'Grand Hotel...',
    type: 'HOTEL APARTMENT',
    location: 'Mecca, Ajy...',
    distance: '820 KM Away',
    description: 'Premium hotel apartment offering 5-star amenities just minutes away from the Holy Mosque. Includes daily housekeeping and concierge services.',
    options: ['Room Service', 'Gym Access', 'Breakfast Included'],
    specs: {
      beds: 2,
      baths: 2,
      sqft: 850
    },
    price: 1200, 
    currency: 'SAR',
    period: 'night',
    imageUrl: '/property3.webp', 
  }
];

export const notificationsData = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=11', // Placeholder avatar
    text: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.',
    time: 'Apr 2, 2023 8:49 pm',
    isUnread: true,
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat.',
    time: 'Mar 21, 2023 11:26 pm',
    isUnread: true,
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia.',
    time: 'Mar 9, 2023 6:18 pm',
    isUnread: true,
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/150?img=44',
    text: 'Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices.',
    time: 'Mar 26, 2023 11:48 am',
    isUnread: false,
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/150?img=33',
    text: 'Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque.',
    time: 'Mar 23, 2023 2:11 pm',
    isUnread: false,
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/150?img=49',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.',
    time: 'Mar 11, 2023 3:46 pm',
    isUnread: false,
  },
];