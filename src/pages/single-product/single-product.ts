import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { ProductService } from "../../app/services/product.service";
import { Product } from "../../app/models/product.model";

@IonicPage({
  name: 'SingleProductPage'
})
@Component({
  selector: 'page-single-product',
  templateUrl: 'single-product.html',
})
export class SingleProductPage {

  public id: number;
  public product: Product;
  public detailsTab: any;
  public reviewsTab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _productService: ProductService) {
    this.id = this.navParams.get('id');
    this.detailsTab = 'ProductDetailPage';
    this.reviewsTab = 'ProductReviewsPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleProductPage');
    // this.getProduct();
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
