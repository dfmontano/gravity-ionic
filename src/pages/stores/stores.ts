import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryService } from "../../app/services/category.service";
import { Category } from "../../app/models/category.model";
import { SubcategoriesListPage} from "../subcategories-list/subcategories-list";

@IonicPage()
@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  public categories: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _categoryService: CategoryService) {
    this.getAllCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
  }

  getAllCategories() {
    this._categoryService.getAll().then(result => {
      this.categories = JSON.parse(result.data);
    }).catch(error => {
      console.log(error);
    });
  }

  showSubcategories(category_id) {
    this.navCtrl.push(SubcategoriesListPage, {category_id: category_id }).catch(error =>{
      console.log(error);
    });
  }

}
