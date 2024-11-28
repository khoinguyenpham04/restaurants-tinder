import { useState } from 'react';
import { Restaurant } from '../types/restaurant';

export const useRestaurantSwipe = (restaurants: Restaurant[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedRestaurants, setLikedRestaurants] = useState<Restaurant[]>([]);
  const [dislikedRestaurants, setDislikedRestaurants] = useState<Restaurant[]>([]);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const currentRestaurant = restaurants[currentIndex];
  const isFinished = currentIndex >= restaurants.length;

  const handleLike = () => {
    if (!isFinished) {
      setDirection('right');
      setLikedRestaurants([...likedRestaurants, currentRestaurant]);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDirection(null);
      }, 300);
    }
  };

  const handleDislike = () => {
    if (!isFinished) {
      setDirection('left');
      setDislikedRestaurants([...dislikedRestaurants, currentRestaurant]);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDirection(null);
      }, 300);
    }
  };

  return {
    currentIndex,
    currentRestaurant,
    isFinished,
    likedRestaurants,
    dislikedRestaurants,
    handleLike,
    handleDislike,
    direction,
  };
};