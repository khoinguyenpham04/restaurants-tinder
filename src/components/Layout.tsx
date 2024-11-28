import React from 'react';
import { Restaurant } from '../types/restaurant';
import { RestaurantList } from './RestaurantList';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  likedRestaurants: Restaurant[];
  dislikedRestaurants: Restaurant[];
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  likedRestaurants,
  dislikedRestaurants,
}) => {
  const [showLiked, setShowLiked] = React.useState(false);
  const [showDisliked, setShowDisliked] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      {/* Left Sidebar - Rejected */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out z-20 
          ${showDisliked ? 'w-80' : 'w-12'}
          flex flex-col overflow-hidden`}
      >
        <button
          onClick={() => setShowDisliked(!showDisliked)}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
          aria-label={showDisliked ? 'Hide rejected restaurants' : 'Show rejected restaurants'}
        >
          <ChevronRight
            className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
              showDisliked ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <div className="flex-none p-4">
          <h2 className={`font-semibold text-gray-900 transition-opacity duration-300 ${
            showDisliked ? 'opacity-100' : 'opacity-0'
          }`}>
            Not Interested
          </h2>
          <span className={`font-semibold text-gray-900 absolute left-0 top-16 transform -rotate-90 transition-opacity duration-300 ${
            showDisliked ? 'opacity-0' : 'opacity-100'
          }`}>
            Not Interested
          </span>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className={`h-full ${showDisliked ? 'px-4 pb-4' : 'hidden'}`}>
            <RestaurantList restaurants={dislikedRestaurants} type="disliked" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 px-4 py-8 transition-all duration-300 ${
        showDisliked ? 'ml-80' : 'ml-12'
      } ${showLiked ? 'mr-80' : 'mr-12'}`}>
        {children}
      </main>

      {/* Right Sidebar - Matches */}
      <aside
        className={`fixed right-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out z-20 
          ${showLiked ? 'w-80' : 'w-12'}
          flex flex-col overflow-hidden`}
      >
        <button
          onClick={() => setShowLiked(!showLiked)}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
          aria-label={showLiked ? 'Hide matched restaurants' : 'Show matched restaurants'}
        >
          <ChevronLeft
            className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
              showLiked ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div className="flex-none p-4">
          <h2 className={`font-semibold text-gray-900 transition-opacity duration-300 ${
            showLiked ? 'opacity-100' : 'opacity-0'
          }`}>
            Your Matches
          </h2>
          <span className={`font-semibold text-gray-900 absolute right-0 top-16 transform rotate-90 transition-opacity duration-300 ${
            showLiked ? 'opacity-0' : 'opacity-100'
          }`}>
            Your Matches
          </span>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className={`h-full ${showLiked ? 'px-4 pb-4' : 'hidden'}`}>
            <RestaurantList restaurants={likedRestaurants} type="liked" />
          </div>
        </div>
      </aside>
    </div>
  );
};