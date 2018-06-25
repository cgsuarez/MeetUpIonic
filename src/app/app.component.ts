import { Component, ViewChild } from '@angular/core';

import { Platform, Nav, MenuController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  user: any;

  constructor(
    public platform: Platform,
    public menuCtrl: MenuController,
    public authProvider: AuthProvider,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.authProvider.getUserInfo().subscribe((user)=>{
      if(user){
        console.log('user: ' + JSON.stringify(user));
        this.user = user;
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logoff(){
      this.authProvider.logoff();
      this.nav.setRoot(LoginPage);
      this.nav.popToRoot();
      this.menuCtrl.close();
  }

}
