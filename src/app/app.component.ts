import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FCM } from "@ionic-native/fcm";

import { StartTabsPage } from "../pages/start-tabs/start-tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = StartTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // fcm.subscribeToTopic('all');
      // fcm.getToken().then(token => {
      //   console.log(token);
      // });
      // fcm.onNotification().subscribe(data => {
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //   }
      //   else {
      //
      //     console.log('Received in foreground');
      //   }
      // });
      // fcm.onTokenRefresh().subscribe(token => {
      //   console.log(token);
      // });
      //end notifications.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
