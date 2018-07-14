import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleProductPage } from './single-product';

@NgModule({
  declarations: [
    SingleProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleProductPage),
  ],
})
export class SingleProductPageModule {}
