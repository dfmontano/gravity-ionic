import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
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
              public viewController: ViewController, public _cartService: CartService,
              private alertController: AlertController) {
    this.apiURL = globals.apiURL;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  emptyCart() {
    this._cartService.cartItems = [];
    this._cartService.removeItemsFromStorage();
  }

  confirmOrder() {
    if (this._cartService.cartItems.length > 0) {

    } else {
      const errorAlert = this.alertController.create({
        title: 'Carrito Vacio',
        subTitle: 'Su carrito se encuentra vacio',
        buttons: ['OK']
      });
      errorAlert.present();
    }
  }

}
