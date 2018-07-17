import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {

  private hasLoggedIn: boolean;

  isLogged(): boolean{

      return this.hasLoggedIn;
  }

}
