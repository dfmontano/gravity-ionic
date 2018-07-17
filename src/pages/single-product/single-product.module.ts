import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from "ionic2-super-tabs";
import { SingleProductPage } from './single-product';
import { ProductDetailPageModule } from "../product-detail/product-detail.module";
import { ProductReviewsPageModule } from "../product-reviews/product-reviews.module";

@NgModule({
  declarations: [
    SingleProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleProductPage),
    SuperTabsModule,
    ProductDetailPageModule,
    ProductReviewsPageModule
  ],
})
export class SingleProductPageModule {}
