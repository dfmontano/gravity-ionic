import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { User } from "../models/user.model";

@Injectable()
export class UserService {

  private readonly apiURL: string;
  private readonly jsonHeader;

  constructor(private http: HTTP) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
    this.jsonHeader = {'Content-Type': 'application/json'};
    this.http.setDataSerializer('json');
  }

  create (user: User) {
    const userData = JSON.stringify(user);
    return this.http.post(this.apiURL + '/signup', userData, this.jsonHeader);
  }




}
