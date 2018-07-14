import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../app/services/product.service";
import { Product } from "../../app/models/product.model";

@IonicPage()
@Component({
  selector: 'page-single-product',
  templateUrl: 'single-product.html',
})
export class SingleProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _productService: ProductService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleProductPage');
  }

}
