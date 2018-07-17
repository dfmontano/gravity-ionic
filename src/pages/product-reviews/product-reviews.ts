import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductReview } from "../../app/models/product-review.model";

@IonicPage()
@Component({
  selector: 'page-product-reviews',
  templateUrl: 'product-reviews.html',
})
export class ProductReviewsPage {

  reviews: ProductReview[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reviews = this.navParams.get('reviews');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductReviewsPage');
  }

}
