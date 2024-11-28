import React from 'react';
import { X, Heart } from 'lucide-react';

interface SwipeButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

export const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onDislike }) => {
  return (
    <div className="flex justify-center gap-8 mt-4">
      <button
        onClick={onDislike}
        className="p-4 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
      >
        <X className="w-8 h-8 text-red-500" />
      </button>
      <button
        onClick={onLike}
        className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
      >
        <Heart className="w-8 h-8 text-green-500" />
      </button>
    </div>
  );
};