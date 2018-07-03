import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";

@Injectable()
export class StoreService {

  private readonly apiURL;

  constructor(private http:HTTP) {
    this.apiURL = 'http://api.clubdecomprasdonesitios.com';
  }

  getBySubcategory(subcategory_id: number) {
    return this.http.get(this.apiURL + '/subcategories/' + subcategory_id + '/stores', {}, {});
  }

  getById(id: number) {
    return this.http.get(this.apiURL + '/stores/' + id, {}, {});
  }

}
