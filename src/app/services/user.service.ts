import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { User } from "../models/user.model";
import { globals } from "../globals";

@Injectable()
export class UserService {

  private readonly apiURL: string;
  private readonly jsonHeader;

  constructor(private http: HTTP) {
    this.apiURL = globals.apiURL;
    this.jsonHeader = {'Content-Type': 'application/json'};
    this.http.setDataSerializer('json');
  }

  create (user: User) {
    const userData = JSON.stringify(user);
    return this.http.post(this.apiURL + '/signup', userData, this.jsonHeader);
  }

  check_email(email: string) {
    const data = {email: email};
    return this.http.post(this.apiURL + '/users/check_email', data, this.jsonHeader );
  }

  check_cedula(cedula: number) {
    const data = {cedula: cedula};
    return this.http.post(this.apiURL + '/users/check_cedula', data, this.jsonHeader);
  }


}
