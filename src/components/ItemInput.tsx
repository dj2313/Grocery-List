import React, { forwardRef, KeyboardEvent } from 'react';
import { Plus } from 'lucide-react';

interface ItemInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: (item: string) => void;
}

export const ItemInput = forwardRef<HTMLInputElement, ItemInputProps>(
  ({ value, onChange, onAdd }, ref) => {
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onAdd(value);
      }
    };

    const handleSubmit = () => {
      onAdd(value);
    };

    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Add Items</h2>
          <p className="text-sm text-gray-600">
            Items will be automatically organized by grocery store section
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              ref={ref}
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter grocery item (e.g., milk, bananas, chicken)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              autoComplete="off"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!value.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-500">
          <div>
            <p className="font-medium text-gray-700 mb-1">Quick suggestions:</p>
            <div className="space-y-0.5">
              <button
                onClick={() => onAdd('milk')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Milk
              </button>
              <button
                onClick={() => onAdd('eggs')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Eggs
              </button>
              <button
                onClick={() => onAdd('bread')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Bread
              </button>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">Produce:</p>
            <div className="space-y-0.5">
              <button
                onClick={() => onAdd('bananas')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Bananas
              </button>
              <button
                onClick={() => onAdd('apples')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Apples
              </button>
              <button
                onClick={() => onAdd('lettuce')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Lettuce
              </button>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">Protein:</p>
            <div className="space-y-0.5">
              <button
                onClick={() => onAdd('chicken breast')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Chicken breast
              </button>
              <button
                onClick={() => onAdd('ground beef')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Ground beef
              </button>
              <button
                onClick={() => onAdd('salmon')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Salmon
              </button>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">Pantry:</p>
            <div className="space-y-0.5">
              <button
                onClick={() => onAdd('pasta')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Pasta
              </button>
              <button
                onClick={() => onAdd('rice')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Rice
              </button>
              <button
                onClick={() => onAdd('olive oil')}
                className="block text-left hover:text-blue-600 transition-colors"
              >
                • Olive oil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);