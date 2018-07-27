import { Injectable } from "@angular/core";
import { AlertController, ToastController, ModalController} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

import { Product } from "../models/product.model";
import { User } from "../models/user.model";

import { LoginService } from "./login.service";

import { LoginPage } from "../../pages/login/login";


@Injectable()
export class CartService {

  public cartItems: Product[] = [];
  public totalPrice: number;
  private currentUser: User;
  private isPremium: boolean = false;

  constructor(private alertController: AlertController, private storage: Storage, public toastController: ToastController,
              private modalController: ModalController, private _loginService: LoginService, private spinner: SpinnerDialog) {
    this.getItemsFromStorage();

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
      item.cart_quantity = 1;
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

  // TODO show cart elements
  showCart() {

    if (this._loginService.userIsLogged) {
      console.log('User has logged in');
      this.spinner.show('', 'Cargando')

      // Get current user
      this._loginService.getCurrentUser().then( response => {
        this.currentUser = JSON.parse(response.data);
        this.isPremium = this.currentUser.premium
        console.log(this.currentUser.email);
      } ).catch( error => {
        console.log(error);
      });

      // Shows the cart page when the current user is loaded
      const cartModal = this.modalController.create('CartPage');
      this.getTotalPrice();
      this.spinner.hide();
      cartModal.present();
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
        item.discount_price = item.price - (item.price * item.discount / 100)
        this.totalPrice =+ item.discount_price;
      }
    }
    else {
      for (let item of this.cartItems) {
        this.totalPrice =+ item.price;
      }
    }
  }

}
