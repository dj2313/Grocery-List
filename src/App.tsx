import React, { useState, useRef, useEffect } from 'react';
import { Plus, Trash2, ShoppingCart, Check, X } from 'lucide-react';
import { GroceryItem, GroceryCategory } from './types';
import { categorizeItem, getCategoryIcon, getCategoryColor } from './utils/categorization';
import { ItemInput } from './components/ItemInput';
import { CategorySection } from './components/CategorySection';
import { Stats } from './components/Stats';

function App() {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (itemName: string) => {
    if (!itemName.trim()) return;
    
    const newItem: GroceryItem = {
      id: Date.now().toString(),
      name: itemName.trim(),
      category: categorizeItem(itemName.trim()),
      completed: false,
      addedAt: new Date()
    };
    
    setItems(prev => [...prev, newItem]);
    setInputValue('');
    inputRef.current?.focus();
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearCompleted = () => {
    setItems(prev => prev.filter(item => !item.completed));
  };

  const clearAll = () => {
    setItems([]);
  };

  // Group items by category
  const itemsByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<GroceryCategory, GroceryItem[]>);

  // Get categories in shopping order
  const categoryOrder: GroceryCategory[] = [
    'produce',
    'dairy',
    'meat',
    'pantry',
    'frozen',
    'bakery',
    'snacks',
    'beverages',
    'health',
    'household',
    'other'
  ];

  const activeCategoriesWithItems = categoryOrder.filter(
    category => itemsByCategory[category]?.length > 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Grocery List</h1>
                <p className="text-sm text-gray-600">Smart shopping made simple</p>
              </div>
            </div>
            <Stats items={items} />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <ItemInput
            ref={inputRef}
            value={inputValue}
            onChange={setInputValue}
            onAdd={addItem}
          />
        </div>

        {/* Action Buttons */}
        {items.length > 0 && (
          <div className="flex gap-3 justify-center">
            <button
              onClick={clearCompleted}
              disabled={!items.some(item => item.completed)}
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Clear Completed
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          </div>
        )}

        {/* Categories */}
        {activeCategoriesWithItems.length > 0 ? (
          <div className="space-y-4">
            {activeCategoriesWithItems.map(category => (
              <CategorySection
                key={category}
                category={category}
                items={itemsByCategory[category]}
                onToggleItem={toggleItem}
                onRemoveItem={removeItem}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Your grocery list is empty
              </h3>
              <p className="text-gray-600 mb-6">
                Start adding items above and they'll be automatically organized by store section
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div className="text-left">
                  <p className="font-medium mb-1">Try adding:</p>
                  <ul className="space-y-0.5">
                    <li>• Milk</li>
                    <li>• Bananas</li>
                    <li>• Chicken breast</li>
                  </ul>
                </div>
                <div className="text-left">
                  <p className="font-medium mb-1">Or:</p>
                  <ul className="space-y-0.5">
                    <li>• Bread</li>
                    <li>• Yogurt</li>
                    <li>• Pasta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 pb-8 text-center text-sm text-gray-500">
        <p>Items are automatically organized by grocery store sections for efficient shopping</p>
      </div>
    </div>
  );
}

export default App;