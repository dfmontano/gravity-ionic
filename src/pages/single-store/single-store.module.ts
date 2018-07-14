import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleStorePage } from './single-store';
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [
    SingleStorePage,
  ],
  imports: [
    IonicPageModule.forChild(SingleStorePage),
    IonicImageLoader
  ],
})
export class SingleStorePageModule {}
