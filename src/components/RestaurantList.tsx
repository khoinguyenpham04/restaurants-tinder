import React from 'react';
import { Restaurant } from '../types/restaurant';
import { Star, MapPin, Banknote } from 'lucide-react';

interface RestaurantListProps {
  restaurants: Restaurant[];
  type: 'liked' | 'disliked';
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, type }) => {
  if (restaurants.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        {type === 'liked' ? 'No matches yet' : 'No rejected restaurants'}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <MapPin size={14} />
              <span className="truncate">{restaurant.address}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500" />
                <span className="text-sm">{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Banknote size={14} />
                <span className="text-sm">{restaurant.priceRange}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};