import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../app/services/product.service";
import { Product } from "../../app/models/product.model";

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  public readonly apiURL: string;
  public id: number;
  public product: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _productService: ProductService) {
    this.product = new Product();
    this.id = this.navParams.get('id');
    this.apiURL = 'http://api.clubdecomprasdonesitios.com'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    this.getProduct();
    console.log(this.product.main_photo.url);
  }

  getProduct() {
    this._productService.getById(this.id).then(result => {
      this.product = JSON.parse(result.data);
      console.log(this.product.name);
      // this.detailsParams = {product: this.product};
      // this.reviewsParams = {reviews: this.product.product_reviews}
    }, error => {
      console.log(error);
    });
  }

}
