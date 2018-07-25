import { Component } from '@angular/core';
import { Modal, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController } from "ionic-angular";
import { LoginService } from "./services/login.service";
// import { FCM } from "@ionic-native/fcm";

import { StartTabsPage } from "../pages/start-tabs/start-tabs";
import { LoginPage } from "../pages/login/login";
import { UserSignupPage } from "../pages/user-signup/user-signup";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = StartTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public modalController: ModalController, private _loginService: LoginService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  showLoginPage() {
    const loginModal = this.modalController.create(LoginPage);
    loginModal.present();
  }

  showSignupPage() {
    const signupModal = this.modalController.create(UserSignupPage);
    signupModal.present();
  }

  logout() {
    this._loginService.logout();
  }

}
