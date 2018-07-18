import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { Storage } from "@ionic/storage";

@Injectable()
export class LoginService {

  private readonly apiURL;
  private authToken: string;
  private hasLoggedIn: boolean;

  constructor(private storage: Storage, private http: HTTP) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
  }

  login(email: string, password: string) {
    const data = JSON.stringify({email: email, password: password});
    return this.http.post(this.apiURL + '/auth/login', data, {});
  }

  isLogged(): boolean{

      return this.hasLoggedIn = true;
  }

}
