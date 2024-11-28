import React from 'react';
import { Restaurant } from '../types/restaurant';

interface MatchesListProps {
  restaurants: Restaurant[];
}

export const MatchesList: React.FC<MatchesListProps> = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Your Matches</h3>
      <div className="grid grid-cols-1 gap-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold">{restaurant.name}</h4>
              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};