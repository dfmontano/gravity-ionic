import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartTabsPage } from './start-tabs';
import { FeaturedProductsPageModule } from "../featured-products/featured-products.module";
import { StoresListPageModule } from "../stores-list/stores-list.module";

@NgModule({
  declarations: [
    StartTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(StartTabsPage),
    FeaturedProductsPageModule,
    StoresListPageModule
  ],
})
export class StartTabsPageModule {}
