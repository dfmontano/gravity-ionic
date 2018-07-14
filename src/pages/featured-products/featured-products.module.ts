import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturedProductsPage } from './featured-products';
import { Ionic2RatingModule } from "ionic2-rating";
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [
    FeaturedProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeaturedProductsPage),
    Ionic2RatingModule,
    IonicImageLoader
  ],
})
export class FeaturedProductsPageModule {}
