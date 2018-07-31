import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ionic2RatingModule } from "ionic2-rating";
import { IonicImageLoader } from "ionic-image-loader";
import { SuperTabsModule } from "ionic2-super-tabs";
import { IonicStorageModule } from "@ionic/storage";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StoresPageModule } from "../pages/stores/stores.module";
import { SubcategoriesListPageModule } from "../pages/subcategories-list/subcategories-list.module";
import { StoresListPageModule } from "../pages/stores-list/stores-list.module";
import { SingleStorePageModule } from "../pages/single-store/single-store.module";
import { FeaturedProductsPageModule } from "../pages/featured-products/featured-products.module";
import { StartTabsPageModule } from "../pages/start-tabs/start-tabs.module";
import { SingleProductPageModule } from "../pages/single-product/single-product.module";
import { ProductDetailPageModule } from "../pages/product-detail/product-detail.module";
import { ProductReviewsPageModule } from "../pages/product-reviews/product-reviews.module";
import { LoginPageModule } from "../pages/login/login.module";
import { UserSignupPageModule } from "../pages/user-signup/user-signup.module";
import { CartPageModule } from "../pages/cart/cart.module";
import { UserAddressPageModule } from "../pages/user-address/user-address.module";
import { OrderConfirmationPageModule } from "../pages/order-confirmation/order-confirmation.module";

// Ionic Native plugins
import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { Facebook } from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from "@ionic-native/geolocation";

// Services
import { StoreService } from "./services/store.service";
import { CategoryService } from "./services/category.service";
import { ProductService } from "./services/product.service";
import { UserService } from "./services/user.service";
import { LoginService } from "./services/login.service";
import { CartService } from "./services/cart.service";

// Validators
import { UserValidator } from "./validators/user.validator";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { firebaseConfig } from "./globals";

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
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot(),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    SuperTabsModule.forRoot(),
    StartTabsPageModule,
    FeaturedProductsPageModule,
    StoresPageModule,
    SubcategoriesListPageModule,
    StoresListPageModule,
    SingleStorePageModule,
    SingleProductPageModule,
    ProductDetailPageModule,
    ProductReviewsPageModule,
    LoginPageModule,
    UserSignupPageModule,
    CartPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    UserAddressPageModule,
    OrderConfirmationPageModule
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
    LoginService,
    UserService,
    SpinnerDialog,
    Facebook,
    GooglePlus,
    UserValidator,
    CartService,
    GoogleMaps,
    Geolocation,
    // FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
