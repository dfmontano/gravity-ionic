import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StoresPage } from "../pages/stores/stores";
import { SubcategoriesListPage } from "../pages/subcategories-list/subcategories-list";
import { StoresListPage } from "../pages/stores-list/stores-list";
import { SingleStorePage } from "../pages/single-store/single-store";

// Ionic Native plugins
import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

// Services
import { StoreService } from "./services/store.service";
import { CategoryService } from "./services/category.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    // StoresPage,
    // SubcategoriesListPage,
    // StoresListPage,
    // SingleStorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // TabsPage,
    // StoresPage,
    // SubcategoriesListPage,
    // StoresListPage,
    // SingleStorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    StoreService,
    CategoryService,
    SpinnerDialog,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
