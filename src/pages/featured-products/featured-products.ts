import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductService } from "../../app/services/product.service";
import { CartService } from "../../app/services/cart.service";
import { Product } from "../../app/models/product.model";

@IonicPage()
@Component({
  selector: 'page-featured-products',
  templateUrl: 'featured-products.html',
})
export class FeaturedProductsPage {

  public readonly apiURL: string;
  public images;
  public products: Product[];

  constructor(private _productService: ProductService, public navCtrl: NavController,
              private spinnerDialog: SpinnerDialog, public splashScreen: SplashScreen, private _cartService: CartService) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
  }

  ionViewDidLoad() {
    this.showFeatured();
  }

  showFeatured() {
    // Shows loading spinner
    this.spinnerDialog.show('Cargando', 'Cargando');
    this._productService.getFeatured().then(result => {
      this.products = JSON.parse(result.data);
      // Hides the spinner once the data is loaded
      this.spinnerDialog.hide();

    }).catch(error => {
      console.log(error);
    })
  }

  doRefresh(refresher) {
    this._productService.getFeatured().then(result => {
      this.products = JSON.parse(result.data);
      // Hides the spinner once the data is loaded
      refresher.complete();
    }).catch(error => {
      console.log(error);
      refresher.complete();
    })
  }

  showProduct(product_id) {
    this.navCtrl.push('SingleProductPage', {id: product_id}).catch( error =>{
      console.log(error);
    });
  }

  showAddressPage() {
    this.navCtrl.push('UserAddressPage');
  }

}
