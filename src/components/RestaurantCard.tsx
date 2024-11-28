import React from 'react';
import { motion } from 'framer-motion';
import { Restaurant } from '../types/restaurant';
import { Star, MapPin, Banknote, UtensilsCrossed, ThumbsUp, ThumbsDown, Info } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  direction: 'left' | 'right' | null;
  isStacked: boolean;
  onDetailsClick: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  direction,
  isStacked,
  onDetailsClick
}) => {
  return (
    <div className={`relative w-full max-w-sm mx-auto ${isStacked ? '' : 'cursor-grab active:cursor-grabbing'}`}>
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover"
          />
          {!isStacked && direction && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`absolute ${
                direction === 'right' ? 'top-4 right-4 bg-green-500' : 'top-4 left-4 bg-red-500'
              } text-white px-4 py-2 rounded-full font-bold transform -rotate-12`}
            >
              {direction === 'right' ? (
                <div className="flex items-center gap-2">
                  <ThumbsUp size={24} />
                  <span>LIKE!</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ThumbsDown size={24} />
                  <span>NOPE</span>
                </div>
              )}
            </motion.div>
          )}
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center gap-1">
              <UtensilsCrossed size={16} className="text-gray-600" />
              <span className="text-sm font-medium">{restaurant.cuisine}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin size={16} />
            <span className="text-sm">{restaurant.address}</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Banknote size={16} />
              <span>{restaurant.priceRange}</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 mt-2">
            <p className="text-gray-700">{restaurant.description}</p>
          </div>
          {!isStacked && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDetailsClick();
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-100 text-purple-700 py-2 rounded-lg hover:bg-purple-200 transition-colors"
            >
              <Info size={18} />
              <span>More Details</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};