import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../app/services/user.service";
import { UserValidator } from "../../app/validators/user.validator";
import { User } from "../../app/models/user.model";

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignupPage {

  user: User;
  userSignupForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _userService: UserService,
              public alertCtrl: AlertController, public formBuilder: FormBuilder, public userValidator: UserValidator) {
    this.user = new User();
    this.userSignupForm = formBuilder.group({
      cedula: [''],
      email: ['', Validators.compose([Validators.email, Validators.required]), this.userValidator.checkEmail.bind(this.userValidator)]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignupPage');
  }

  // Async check if the record exists in the db


  check_cedula(cedula: number) {
    this._userService.check_cedula(cedula).then(result => {
      let json = JSON.parse(result.data);
      console.log(json.message);
      if (result.data.message == 'taken') {
        let alert = this.alertCtrl.create({
          subTitle: 'Esta cedula ya se encuentra registrada',
          buttons: ['OK']
        });
        alert.present();
      }
    }).catch( error => {
      console.log(error.error)
    });
  }

  signup() {

  }

}
