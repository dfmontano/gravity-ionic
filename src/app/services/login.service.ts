import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { Storage } from "@ionic/storage";
import { User } from "../models/user.model";
import { globals } from "../globals";

@Injectable()
export class LoginService {

  private readonly apiURL: string;
  private readonly jsonHeader;
  private authToken: string;
  public userIsLogged: boolean = false;
  public user: User;

  constructor(private storage: Storage, private http: HTTP) {
    this.apiURL = globals.apiURL;
    this.jsonHeader = {'Content-Type': 'application/json; charset=UTF-8'};
    this.http.setDataSerializer('json');
    this.isLogged();
  }

  login(user: User) {
    const userData = {email: user.email.toString(), password: user.password.toString()};
    return this.http.post(this.apiURL + '/auth/login', userData,{});
  }

  logout() {
    if(this.userIsLogged) {
      this.storage.remove('auth_token').then( () => {
        this.userIsLogged = false;
        console.log('Successfully logged out');
      })
    }
  }

  isLogged() {
    this.storage.get('auth_token').then(token => {

      if (token) {
        this.authToken = token;
        this.userIsLogged = true;
      }
      else {
        this.userIsLogged = false
      }

    });
    
  }

  getAuthToken(): string {
    return this.authToken;
  }

  getCurrentUser() {

  }

}
