import React from 'react';
import { CheckCircle, Circle, ShoppingBag } from 'lucide-react';
import { GroceryItem } from '../types';

interface StatsProps {
  items: GroceryItem[];
}

export const Stats: React.FC<StatsProps> = ({ items }) => {
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  const remainingItems = totalItems - completedItems;

  if (totalItems === 0) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <ShoppingBag className="w-5 h-5" />
        <span className="text-sm font-medium">0 items</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-gray-600">
        <Circle className="w-4 h-4" />
        <span className="text-sm font-medium">{remainingItems}</span>
      </div>
      
      <div className="flex items-center gap-1 text-green-600">
        <CheckCircle className="w-4 h-4" />
        <span className="text-sm font-medium">{completedItems}</span>
      </div>

      <div className="text-sm text-gray-500">
        of {totalItems}
      </div>

      {/* Progress Bar */}
      {totalItems > 0 && (
        <div className="w-16 bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedItems / totalItems) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};