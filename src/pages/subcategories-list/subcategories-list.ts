import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryService } from "../../app/services/category.service";
import { Subcategory } from "../../app/models/subcategory.model";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

import { StoresListPage } from "../stores-list/stores-list";

@IonicPage()
@Component({
  selector: 'page-subcategories-list',
  templateUrl: 'subcategories-list.html',
})
export class SubcategoriesListPage {

  subcategories: Subcategory[];
  category_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _categoryService: CategoryService,
              private spinnerDialog: SpinnerDialog) {
    this.category_id = navParams.get('category_id');
    this.getSubcategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoriesListPage');
  }

  getSubcategories() {
    this.spinnerDialog.show('Cargando', 'Cargando');
    this._categoryService.getSubcategories(this.category_id).then(result => {
      this.subcategories = JSON.parse(result.data);
      this.spinnerDialog.hide();
    }).catch(error => {
      console.log(error);
    });
  }

  showStores(subcategory_id) {
    this.navCtrl.push(StoresListPage, {subcategory_id: subcategory_id}).catch(error => {
      console.log(error);
    });
  }

}
