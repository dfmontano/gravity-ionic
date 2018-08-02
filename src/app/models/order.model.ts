import { User } from "./user.model";
import { Store } from "./store.model";


export class Order {

  id: string;
  status: string;
  courier_name: string;
  total_price: number;
  shipping_cost: number;
  latitude: string;
  longitude: string;
  address_reference: string;
  commentary: string;
  pay_method: string;
  user: User = new User();
  store: Store = new Store();

}
