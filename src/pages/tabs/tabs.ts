import { Component } from '@angular/core';

import { StoresPage } from "../stores/stores";
import { FeaturedProductsPage } from "../featured-products/featured-products";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeaturedProductsPage;
  tab2Stores = StoresPage;

  constructor() {

  }
}
