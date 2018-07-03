import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HOME_IMAGES } from "../../app/data/home-images";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  public images;

  constructor(public navCtrl: NavController) {
    this.images = HOME_IMAGES;
    // this.slides.startAutoplay();
  }

  ionViewDidLoad() {
    this.slides.startAutoplay();
  }

}
