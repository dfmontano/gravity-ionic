import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleStorePage } from './single-store';

@NgModule({
  declarations: [
    SingleStorePage,
  ],
  imports: [
    IonicPageModule.forChild(SingleStorePage),
  ],
})
export class SingleStorePageModule {}
