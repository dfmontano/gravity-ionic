import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";

@Injectable()
export class ProductService {

  private readonly apiURL: string;

  constructor (private http: HTTP){
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
  }

  getFeatured() {
    return this.http.get(this.apiURL + '/products/index/featured', {}, {});
  }

  getById(id: number) {
    return this.http.get(this.apiURL + '/products/' + id, {}, {});
  }
}
