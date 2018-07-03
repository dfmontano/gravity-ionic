import { Category } from './category.model';
import { Subcategory } from './subcategory.model';
import { Cover } from './cover.model';
import { Logo } from './logo.model';
import { OwnerPhoto } from './owner-photo.model';

export class Store {

  id: number;
  nombre: string;
  descripcion: string;
  slogan: string;
  fijo: number;
  celular: number;
  propietario: string;
  ruc: number;
  calle_principal: string;
  calle_secundaria: string;
  ciudad: string;
  provincia: string;
  sector: string;
  latitud: number;
  longitud: number;
  referencia: string;
  webpage_link: string;
  facebook_link: string;
  twitter_link: string;
  instagram_link: string;
  commission: number;
  created_at: number;
  updated_at: string;
  approved: boolean;
  rating: number;
  total_products: number;
  category: Category = new Category();
  subcategory: Subcategory = new Subcategory();
  cover: Cover = new Cover();
  owner_photo: OwnerPhoto = new OwnerPhoto();
  logo: Logo = new Logo();
  images: string[];

}
