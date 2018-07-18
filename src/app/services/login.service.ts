import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class LoginService {

  private authToken: string;
  private hasLoggedIn: boolean;

  constructor(private storage: Storage) {

  }

  isLogged(): boolean{

      return this.hasLoggedIn = true;
  }

}
