export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: '£' | '££' | '£££' | '££££';
  rating: number;
  image: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  openingHours: {
    [key: string]: string;
  };
  popularDishes: Array<{
    name: string;
    price: number;
    description: string;
  }>;
  bookingUrl: string;
  specialOffers?: Array<{
    title: string;
    description: string;
    type: 'early-bird' | 'special-menu' | 'discount';
  }>;
  reviews: Array<{
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}