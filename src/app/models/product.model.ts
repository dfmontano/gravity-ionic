import { Category } from './category.model';
import { Subcategory } from './subcategory.model';
import { Store } from './store.model';

export class Product {
  id: string;
  name: string;
  description: string;
  store: Store = new Store();
  category: Category = new Category();
  subcategory: Subcategory = new Subcategory();
  sku: string;
  stock: number;
  price: number;
  discount: number;
  visits: number;
  rating: number;
  reviews: number;
  ventas: number;
  discount_price: number;
  images: string[];
}
