import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturedProductsPage } from './featured-products';
import { Ionic2RatingModule } from "ionic2-rating";
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader } from "ionic-image-loader";
import { SingleProductPageModule } from "../single-product/single-product.module";

@NgModule({
  declarations: [
    FeaturedProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeaturedProductsPage),
    Ionic2RatingModule,
    IonicImageLoader,
    SingleProductPageModule
  ],
})
export class FeaturedProductsPageModule {}
