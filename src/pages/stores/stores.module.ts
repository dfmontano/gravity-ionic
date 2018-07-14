import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresPage } from './stores';
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [
    StoresPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresPage),
    IonicImageLoader
  ],
})
export class StoresPageModule {}
