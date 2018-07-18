import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";

@Injectable()
export class CartService {

  private cartItems: Product[];
  private totalPrice: number;
  private isPremium: boolean;

  constructor (user: User) {
    this.isPremium = user.premium;
  }

  addProduct (item: Product) {
    this.cartItems.push(item);
  }

  getTotalPrice () {
    if (this.isPremium){

    }
  }

}
