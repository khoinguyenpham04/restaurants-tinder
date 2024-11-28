import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Restaurant } from '../types/restaurant';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantDetails } from './RestaurantDetails';

interface CardStackProps {
  restaurants: Restaurant[];
  currentIndex: number;
  direction: 'left' | 'right' | null;
}

export const CardStack: React.FC<CardStackProps> = ({
  restaurants,
  currentIndex,
  direction,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const nextIndex = currentIndex + 1;

  return (
    <div className="relative h-[600px] w-full">
      <AnimatePresence>
        {/* Next card (showing behind) */}
        {nextIndex < restaurants.length && (
          <motion.div
            key={`next-${restaurants[nextIndex].id}`}
            className="absolute top-0 left-0 right-0"
            initial={{ scale: 0.9, y: 8 }}
            animate={{ scale: 0.95, y: 4 }}
            exit={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="opacity-50">
              <RestaurantCard
                restaurant={restaurants[nextIndex]}
                direction={null}
                isStacked={true}
                onDetailsClick={() => {}}
              />
            </div>
          </motion.div>
        )}

        {/* Current card */}
        {currentIndex < restaurants.length && (
          <motion.div
            key={restaurants[currentIndex].id}
            className="absolute top-0 left-0 right-0"
            initial={{ scale: 0.95, y: 4, opacity: 0.5 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{
              x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
              opacity: 0,
              rotate: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <RestaurantCard
              restaurant={restaurants[currentIndex]}
              direction={direction}
              isStacked={false}
              onDetailsClick={() => setSelectedRestaurant(restaurants[currentIndex])}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <RestaurantDetails
        restaurant={selectedRestaurant!}
        isOpen={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />
    </div>
  );
};