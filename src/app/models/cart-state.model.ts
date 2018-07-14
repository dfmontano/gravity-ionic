import { CartProduct } from './cart-product.model';

export class CartState {
  loaded: boolean;
  products: CartProduct[];
}
