import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { ProductService } from "../../app/services/product.service";
import { Product } from "../../app/models/product.model";
import { HOME_IMAGES } from "../../app/data/home-images";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public readonly apiURL: string;
  public images;
  public products: Product[];

  constructor(public navCtrl: NavController, private _productService: ProductService,
              private spinnerDialog: SpinnerDialog) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
    // this.images = HOME_IMAGES;

    // this.slides.startAutoplay();
  }

  ionViewDidLoad() {
    this.showFeatured();
  }

  showFeatured() {
    // Shows loading spinner
    this.spinnerDialog.show('Cargando', 'Cargando');
    this._productService.getFeatured().then(result => {
      this.products = JSON.parse(result.data);
      // Hides the spinner once the data is loaded
      this.spinnerDialog.hide();
    }).catch(error => {
      console.log(error);
    })
  }

}
