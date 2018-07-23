import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSignupPage } from './user-signup';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UserSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSignupPage),
    FormsModule,
    ReactiveFormsModule
  ],
})
export class UserSignupPageModule {}
