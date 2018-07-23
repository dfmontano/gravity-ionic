import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UserService } from "../services/user.service";

@Injectable()
export class UserValidator {

  debouncer: any;

  constructor(public _userService: UserService) {

  }

  checkEmail(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {
        this.debouncer = setTimeout(() => {
          this._userService.check_email(control.value).then( response => {
            const validationMsg = JSON.parse(response.data);
            if (validationMsg.message == 'taken' ) {
              resolve({
                'email taken': true
              });
            }
            else{
              resolve(null);
            }
        });
      }, 1000);
    });

  }

}
