import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresListPage } from './stores-list';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [
    StoresListPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresListPage),
    IonicImageLoader
  ],
})
export class StoresListPageModule {}
