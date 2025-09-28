import { GroceryCategory } from '../types';
import { 
  Apple, 
  Milk, 
  Beef, 
  Package, 
  Snowflake, 
  Croissant, 
  Cookie, 
  Coffee, 
  Heart, 
  Home,
  HelpCircle
} from 'lucide-react';

const categoryKeywords: Record<GroceryCategory, string[]> = {
  produce: [
    // Fruits
    'apple', 'apples', 'banana', 'bananas', 'orange', 'oranges', 'grape', 'grapes',
    'strawberry', 'strawberries', 'blueberry', 'blueberries', 'raspberry', 'raspberries',
    'pineapple', 'mango', 'avocado', 'avocados', 'lemon', 'lemons', 'lime', 'limes',
    'peach', 'peaches', 'pear', 'pears', 'cherry', 'cherries', 'kiwi', 'watermelon',
    'cantaloupe', 'honeydew', 'coconut', 'papaya', 'plum', 'plums',
    // Vegetables
    'lettuce', 'spinach', 'kale', 'arugula', 'cabbage', 'broccoli', 'cauliflower',
    'carrot', 'carrots', 'celery', 'cucumber', 'cucumbers', 'tomato', 'tomatoes',
    'potato', 'potatoes', 'onion', 'onions', 'garlic', 'bell pepper', 'peppers',
    'mushroom', 'mushrooms', 'zucchini', 'squash', 'corn', 'peas', 'beans',
    'asparagus', 'brussels sprouts', 'radish', 'beets', 'sweet potato', 'yam',
    'herbs', 'basil', 'parsley', 'cilantro', 'mint', 'rosemary', 'thyme'
  ],
  
  dairy: [
    'milk', 'cheese', 'yogurt', 'butter', 'cream', 'eggs', 'egg', 'sour cream',
    'cottage cheese', 'cream cheese', 'parmesan', 'cheddar', 'mozzarella',
    'swiss cheese', 'goat cheese', 'feta', 'ricotta', 'half and half',
    'heavy cream', 'whipped cream', 'buttermilk', 'greek yogurt'
  ],
  
  meat: [
    'chicken', 'beef', 'pork', 'turkey', 'fish', 'salmon', 'tuna', 'shrimp',
    'ground beef', 'ground turkey', 'chicken breast', 'chicken thighs',
    'bacon', 'ham', 'sausage', 'hot dogs', 'deli meat', 'lunch meat',
    'steak', 'pork chops', 'ribs', 'lamb', 'crab', 'lobster', 'cod',
    'tilapia', 'mahi mahi', 'scallops', 'clams', 'mussels'
  ],
  
  pantry: [
    'rice', 'pasta', 'bread', 'flour', 'sugar', 'salt', 'pepper', 'oil',
    'olive oil', 'vegetable oil', 'vinegar', 'balsamic vinegar', 'honey',
    'peanut butter', 'jelly', 'jam', 'cereal', 'oats', 'quinoa', 'barley',
    'beans', 'lentils', 'chickpeas', 'canned tomatoes', 'tomato sauce',
    'pasta sauce', 'soy sauce', 'hot sauce', 'ketchup', 'mustard',
    'mayonnaise', 'spices', 'herbs', 'vanilla', 'baking powder', 'baking soda',
    'canned goods', 'soup', 'broth', 'stock'
  ],
  
  frozen: [
    'frozen vegetables', 'frozen fruit', 'frozen berries', 'ice cream',
    'frozen pizza', 'frozen meals', 'frozen chicken', 'frozen fish',
    'frozen shrimp', 'frozen fries', 'frozen peas', 'frozen corn',
    'frozen broccoli', 'frozen spinach', 'sorbet', 'frozen yogurt',
    'ice', 'frozen waffles', 'frozen bagels'
  ],
  
  bakery: [
    'bread', 'bagels', 'muffins', 'croissants', 'donuts', 'cake', 'cookies',
    'pita bread', 'tortillas', 'rolls', 'buns', 'sourdough', 'wheat bread',
    'white bread', 'rye bread', 'pastries', 'danish', 'cupcakes'
  ],
  
  snacks: [
    'chips', 'crackers', 'pretzels', 'popcorn', 'nuts', 'almonds', 'peanuts',
    'cashews', 'walnuts', 'trail mix', 'granola bars', 'protein bars',
    'chocolate', 'candy', 'gum', 'cookies', 'dried fruit', 'jerky',
    'rice cakes', 'veggie chips'
  ],
  
  beverages: [
    'water', 'soda', 'juice', 'coffee', 'tea', 'beer', 'wine', 'milk',
    'almond milk', 'soy milk', 'coconut milk', 'orange juice', 'apple juice',
    'cranberry juice', 'energy drinks', 'sports drinks', 'sparkling water',
    'kombucha', 'lemonade'
  ],
  
  health: [
    'shampoo', 'conditioner', 'soap', 'toothpaste', 'toothbrush', 'deodorant',
    'lotion', 'sunscreen', 'vitamins', 'supplements', 'medicine', 'bandages',
    'first aid', 'contact solution', 'razor', 'shaving cream', 'makeup',
    'moisturizer', 'body wash', 'face wash'
  ],
  
  household: [
    'toilet paper', 'paper towels', 'tissues', 'laundry detergent', 'dish soap',
    'cleaning supplies', 'trash bags', 'aluminum foil', 'plastic wrap',
    'paper plates', 'napkins', 'sponges', 'bleach', 'fabric softener',
    'air freshener', 'batteries', 'light bulbs', 'candles'
  ],
  
  other: []
};

export function categorizeItem(itemName: string): GroceryCategory {
  const lowerName = itemName.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerName.includes(keyword))) {
      return category as GroceryCategory;
    }
  }
  
  return 'other';
}

export function getCategoryIcon(category: GroceryCategory) {
  const iconMap = {
    produce: Apple,
    dairy: Milk,
    meat: Beef,
    pantry: Package,
    frozen: Snowflake,
    bakery: Croissant,
    snacks: Cookie,
    beverages: Coffee,
    health: Heart,
    household: Home,
    other: HelpCircle
  };
  
  return iconMap[category];
}

export function getCategoryColor(category: GroceryCategory) {
  const colorMap = {
    produce: 'bg-green-500',
    dairy: 'bg-blue-500',
    meat: 'bg-red-500',
    pantry: 'bg-yellow-500',
    frozen: 'bg-cyan-500',
    bakery: 'bg-orange-500',
    snacks: 'bg-purple-500',
    beverages: 'bg-indigo-500',
    health: 'bg-pink-500',
    household: 'bg-gray-500',
    other: 'bg-slate-500'
  };
  
  return colorMap[category];
}

export function getCategoryName(category: GroceryCategory): string {
  const nameMap = {
    produce: 'Produce',
    dairy: 'Dairy & Eggs',
    meat: 'Meat & Seafood',
    pantry: 'Pantry & Dry Goods',
    frozen: 'Frozen Foods',
    bakery: 'Bakery',
    snacks: 'Snacks',
    beverages: 'Beverages',
    health: 'Health & Beauty',
    household: 'Household Items',
    other: 'Other'
  };
  
  return nameMap[category];
}