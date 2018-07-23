import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { Storage } from "@ionic/storage";
import { User } from "../models/user.model";
import { globals } from "../globals";

@Injectable()
export class LoginService {

  private readonly apiURL;
  private readonly jsonHeader;
  private authToken: string;
  private hasLoggedIn: boolean;

  constructor(private storage: Storage, private http: HTTP) {
    this.apiURL = globals.apiURL;
    this.jsonHeader = {'Content-Type': 'application/json'};
    this.http.setDataSerializer('json');
  }

  login(user: User) {
    const userData = {email: user.email, password: user.password};
    return this.http.post(this.apiURL + '/auth/login', userData, this.jsonHeader);
  }

  isLogged(): boolean {
    this.storage.get('auth_token').then(value => {
      this.authToken = value;
    });
    if (this.authToken) {
      return this.hasLoggedIn = true;
    }
    else {
      return this.hasLoggedIn = false
    }
  }

  getAuthToken(): string {
    return this.authToken;
  }

  getCurrentUser() {

  }

}
