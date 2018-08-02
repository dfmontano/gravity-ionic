import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { FeaturedProductsPage } from "../featured-products/featured-products";

@IonicPage()
@Component({
  selector: 'page-start-tabs',
  templateUrl: 'start-tabs.html',
})
export class StartTabsPage {

  homeTab = 'FeaturedProductsPage';
  categoriesTab = 'StoresPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartTabsPage');
  }

}
