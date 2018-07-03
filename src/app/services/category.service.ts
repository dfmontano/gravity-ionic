import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";

@Injectable()
export class CategoryService {

  private readonly apiURL;

  constructor (private http:HTTP) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
  }

  getAll() {
    return this.http.get(this.apiURL + '/categories/index', {}, {});
  }

  getSubcategories(category_id) {
    return this.http.get(this.apiURL + '/categories/' + category_id + '/subcategories', {}, {});
  }

}
