import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";

@Injectable()
export class CartService {

  private cartItems: Product[];
  private totalPrice: number;
  private isPremium: boolean;
  private user: User;

  setUser(user: User) {
    this.user = user;
  }

  addProduct (item: Product) {
    this.cartItems.push(item);
  }

  getTotalPrice () {
    if (this.isPremium){
      for (let item of this.cartItems) {
        let discountPrice = item.price - (item.price * item.discount / 100 );
        this.totalPrice += (item.price - discountPrice);
      }
    }
    else {

    }
  }

}
