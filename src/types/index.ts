export type GroceryCategory = 
  | 'produce'
  | 'dairy' 
  | 'meat'
  | 'pantry'
  | 'frozen'
  | 'bakery'
  | 'snacks'
  | 'beverages'
  | 'health'
  | 'household'
  | 'other';

export interface GroceryItem {
  id: string;
  name: string;
  category: GroceryCategory;
  completed: boolean;
  addedAt: Date;
}

export interface CategoryInfo {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}