import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { Ionic2RatingModule } from "ionic2-rating";
import { IonicImageLoader } from "ionic-image-loader";

// Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StoresPageModule } from "../pages/stores/stores.module";
import { SubcategoriesListPageModule } from "../pages/subcategories-list/subcategories-list.module";
import { StoresListPageModule } from "../pages/stores-list/stores-list.module";
import { SingleStorePageModule } from "../pages/single-store/single-store.module";
import { FeaturedProductsPageModule } from "../pages/featured-products/featured-products.module";

// Ionic Native plugins
import { HTTP } from '@ionic-native/http';
import { FCM } from '@ionic-native/fcm';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

// Services
import { StoreService } from "./services/store.service";
import { CategoryService } from "./services/category.service";
import { ProductService } from "./services/product.service";
import {StartTabsPageModule} from "../pages/start-tabs/start-tabs.module";


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
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot(),
    Ionic2RatingModule,
    StartTabsPageModule,
    FeaturedProductsPageModule,
    StoresPageModule,
    SubcategoriesListPageModule,
    StoresListPageModule,
    SingleStorePageModule,
    // IonicPageModule.forChild(StoresPage),
    // IonicPageModule.forChild(SubcategoriesListPage),
    // IonicPageModule.forChild(SingleStorePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
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
    ProductService,
    SpinnerDialog,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
