import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreService } from "../../app/services/store.service";
import { Store } from "../../app/models/store.model";
import { SingleStorePage } from "../single-store/single-store";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

@IonicPage()
@Component({
  selector: 'page-stores-list',
  templateUrl: 'stores-list.html',
})
export class StoresListPage {

  public subcategory_id;
  public stores: Store[];
  public apiURL: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _storeService: StoreService,
              private spinnerDialog: SpinnerDialog) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
    this.subcategory_id = this.navParams.get('subcategory_id');
    this.getStores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresListPage');
  }

  getStores() {
    this.spinnerDialog.show('Cargando', 'Cargando');
    this._storeService.getBySubcategory(this.subcategory_id).then(result => {
      this.stores = JSON.parse(result.data);
      this.spinnerDialog.hide();
    }).catch(error => {
      console.log(error);
    });
  }

  viewStore(storeId) {
    this.navCtrl.push(SingleStorePage, {id: storeId});
  }

}
