import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreService } from "../../app/services/store.service";
import { Store } from "../../app/models/store.model";

@IonicPage()
@Component({
  selector: 'page-single-store',
  templateUrl: 'single-store.html',
})
export class SingleStorePage {

  public apiURL: string;
  public id: number;
  public store: Store;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _storeService: StoreService) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
    this.id = this.navParams.get('id');
    this.store = new Store();
    this.getStore();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleStorePage');
  }

  getStore() {
    this._storeService.getById(this.id).then(result => {
      this.store = JSON.parse(result.data);
    }).catch(error => {
      console.log(error);
    });
  }

}
