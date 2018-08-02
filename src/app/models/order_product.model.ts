import { Product } from "./product.model";
import { Order } from "./order.model";

export class OrderProduct {

  product: Product = new Product();
  order: Order = new Order();
  quantity: number;
  instruction: string;
  price: number;

}
