import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Restaurant } from '../types/restaurant';
import { RestaurantMap } from './RestaurantMap';
import { 
  X, 
  Clock, 
  Menu as MenuIcon, 
  Tag, 
  Star, 
  Phone, 
  MapPin,
  Calendar,
  Users,
  ChefHat,
  Sparkles,
  ExternalLink 
} from 'lucide-react';

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  isOpen: boolean;
  onClose: () => void;
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
  isOpen,
  onClose,
}) => {
  if (!restaurant) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold">{restaurant.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <p className="text-gray-600">{restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
              </div>

              <div className="mb-6">
                <RestaurantMap coordinates={restaurant.coordinates} name={restaurant.name} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-sm text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>
                <a 
                  href={restaurant.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Table</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Opening Hours
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(restaurant.openingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MenuIcon className="w-5 h-5" />
                  Popular Dishes
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {restaurant.popularDishes.map((dish) => (
                    <div key={dish.name} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{dish.name}</p>
                          <p className="text-sm text-gray-600">{dish.description}</p>
                        </div>
                        <span className="font-medium">£{dish.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {restaurant.specialOffers && (
                <section className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Special Offers
                  </h3>
                  <div className="space-y-3">
                    {restaurant.specialOffers.map((offer) => (
                      <div 
                        key={offer.title}
                        className={`border rounded-lg p-4 ${
                          offer.type === 'early-bird' 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-purple-200 bg-purple-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {offer.type === 'early-bird' ? (
                            <Clock className="w-5 h-5 text-green-600" />
                          ) : (
                            <ChefHat className="w-5 h-5 text-purple-600" />
                          )}
                          <p className={`font-medium ${
                            offer.type === 'early-bird' ? 'text-green-800' : 'text-purple-800'
                          }`}>
                            {offer.title}
                          </p>
                        </div>
                        <p className={`text-sm mt-1 ${
                          offer.type === 'early-bird' ? 'text-green-700' : 'text-purple-700'
                        }`}>
                          {offer.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Recent Reviews
                </h3>
                <div className="space-y-4">
                  {restaurant.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium">{review.author}</span>
                          <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                              fill={i < review.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};