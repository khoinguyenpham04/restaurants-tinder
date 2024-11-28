import React from 'react';
import { CardStack } from './components/CardStack';
import { SwipeButtons } from './components/SwipeButtons';
import { Layout } from './components/Layout';
import { useRestaurantSwipe } from './hooks/useRestaurantSwipe';
import { restaurants } from './data/restaurants';
import { Utensils } from 'lucide-react';

function App() {
  const {
    currentIndex,
    isFinished,
    likedRestaurants,
    dislikedRestaurants,
    handleLike,
    handleDislike,
    direction,
  } = useRestaurantSwipe(restaurants);

  return (
    <Layout likedRestaurants={likedRestaurants} dislikedRestaurants={dislikedRestaurants}>
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Utensils className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Maisie's Match</h1>
        </div>

        {!isFinished ? (
          <>
            <CardStack
              restaurants={restaurants}
              currentIndex={currentIndex}
              direction={direction}
            />
            <SwipeButtons onLike={handleLike} onDislike={handleDislike} />
          </>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-4">
              You've seen all restaurants!
            </h2>
            <p className="text-gray-600">
              Check out your matches in the side panel to plan your next date.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;