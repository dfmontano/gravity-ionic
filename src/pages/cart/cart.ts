import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { globals } from "../../app/globals";

import { CartService } from "../../app/services/cart.service";

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public apiURL: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController, public _cartService: CartService) {
    this.apiURL = globals.apiURL;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  emptyCart() {
    this._cartService.cartItems = [];
  }

}
