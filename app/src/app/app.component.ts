import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyC9yOIYmXnsh_h2tVzWMj1GXoZORQWCldc',
  authDomain: 'lista-do-joao.firebaseapp.com',
  databaseURL: 'https://lista-do-joao.firebaseio.com',
  projectId: 'lista-do-joao',
  storageBucket: 'lista-do-joao.appspot.com',
  messagingSenderId: '1085217288980',
  appId: '1:1085217288980:web:55f908c243282d9ee74801'
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
