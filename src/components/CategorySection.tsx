import React from 'react';
import { Trash2 } from 'lucide-react';
import { GroceryItem, GroceryCategory } from '../types';
import { getCategoryIcon, getCategoryColor, getCategoryName } from '../utils/categorization';

interface CategorySectionProps {
  category: GroceryCategory;
  items: GroceryItem[];
  onToggleItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  items,
  onToggleItem,
  onRemoveItem
}) => {
  const Icon = getCategoryIcon(category);
  const colorClass = getCategoryColor(category);
  const categoryName = getCategoryName(category);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Category Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className={`p-2 ${colorClass} rounded-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{categoryName}</h3>
          <p className="text-sm text-gray-500">
            {items.length} item{items.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-4 transition-all duration-200 ${
              item.completed ? 'bg-gray-50' : 'hover:bg-gray-50'
            }`}
          >
            <button
              onClick={() => onToggleItem(item.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                item.completed
                  ? `${colorClass} border-transparent`
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {item.completed && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            <span
              className={`flex-1 text-gray-900 transition-all duration-200 ${
                item.completed
                  ? 'line-through text-gray-500'
                  : ''
              }`}
            >
              {item.name}
            </span>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};