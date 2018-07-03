import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresListPage } from './stores-list';

@NgModule({
  declarations: [
    StoresListPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresListPage),
  ],
})
export class StoresListPageModule {}
