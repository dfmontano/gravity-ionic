import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubcategoriesListPage } from './subcategories-list';

@NgModule({
  declarations: [
    SubcategoriesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SubcategoriesListPage),
  ],
})
export class SubcategoriesListPageModule {}
