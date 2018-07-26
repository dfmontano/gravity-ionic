import { Injectable } from "@angular/core";
import { AlertController, ToastController, ModalController} from "ionic-angular";
import { Storage } from "@ionic/storage";

import { Product } from "../models/product.model";
import { User } from "../models/user.model";

import { LoginService } from "./login.service";

import { LoginPage } from "../../pages/login/login";

@Injectable()
export class CartService {

  public cartItems: Product[] = [];
  private totalPrice: number;
  private isPremium: boolean;
  private user: User;

  constructor(private alertController: AlertController, private storage: Storage, public toastController: ToastController,
              private modalController: ModalController, private _loginService: LoginService) {
    this.getItemsFromStorage();
  }

  setUser(user: User) {
    this.user = user;
  }

  addProduct(item: Product) {

    if (this._loginService.userIsLogged == true) {
      // Check if the product was already added in the cart
      if (this.cartItems) {
        for (let cartItem of this.cartItems) {
          if (item.id == cartItem.id) {
            // Show alert
            this.alertController.create({
              title: 'Producto existente',
              subTitle: 'El producto ya se encuentra en el carrito',
              buttons: ['OK']
            }).present();
            return;
          }
        }
      }

      this.cartItems.push(item);
      this.saveInStorage();
      // Shows toast alert when a product is successfully added to the cart
      const toast = this.toastController.create({
        message: 'Producto añadido al carrito',
        duration: 1500
      });
      toast.present();
    }
    else {
      this.alertController.create({
        title: 'Inicia Sesión',
        subTitle: 'Por favor inicia sesión para empezar a comprar',
        buttons: ['OK']
      }).present();
    }

  }

  getItemsFromStorage() {
    let promise = new Promise( (resolve, reject) => {
      this.storage.ready().then( () => {
        this.storage.get('cart_items').then( cart_items => {
          if (cart_items) {
            this.cartItems = cart_items;
          }
          resolve();
        });
      } );
    } );
  }

  showCart() {

    if (this._loginService.userIsLogged) {
      console.log('User has logged in');
    }
    else {
      const loginModal = this.modalController.create(LoginPage);
      loginModal.present();
    }

  }

  private saveInStorage() {
    this.storage.set('cart_items', this.cartItems);
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
