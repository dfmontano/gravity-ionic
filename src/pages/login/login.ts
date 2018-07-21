import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { LoginService } from "../../app/services/login.service";
import { User } from "../../app/models/user.model";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User;
  private auth_token: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _loginService: LoginService,
              private storage: Storage, public alertController: AlertController, private fb: Facebook,
              private googlePlus: GooglePlus) {
      this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showErrorAlert() {
    const alert = this.alertController.create({
      title: 'Error',
      subTitle: 'Usuario y/o contraseña incorrectos',
      buttons: ['Ok']
    });
    alert.present();
  }

  login() {
    this._loginService.login(this.user).then(result => {
      this.auth_token = JSON.parse(result.data);
      console.log(this.auth_token.auth_token);
      this.storage.set('auth_token', this.auth_token.auth_token);
      this.navCtrl.pop();
    }).catch(error => {
      console.log(error);
      this.showErrorAlert();
    });
  }

  loginWithFacebook() {
    this.fb.login(['public_profile', 'email', 'user_hometown', 'user_birthday'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook', res);
      }).catch(error => {
      console.log(error);
    });
  }

  // TODO Change the SHA key for production in Google Console
  loginWithGoogle() {
    this.googlePlus.login({
      'webClientId': '1063429743519-n8johd5m87liht0tmr0bmh6idk923s4k.apps.googleusercontent.com',
      'scopes': 'profile email'
    }).then(response => {
      console.log(response.email);
      console.log(response.displayName);
      this.navCtrl.pop();
    }).catch(error => {
      console.log(error);
    });
  }

}
