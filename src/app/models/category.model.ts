import { Subcategory } from './subcategory.model';

export class Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  subcategories: Array<Subcategory>;
}
