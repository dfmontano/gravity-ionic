import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { StoresPage } from "../stores/stores";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Stores = StoresPage;

  constructor() {

  }
}
