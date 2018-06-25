import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public authProvider: AuthProvider) {
  }

  ionViewWillEnter(){

     this.authProvider.getUserInfo().subscribe((user)=>{
        if(user){
             this.navCtrl.setRoot(ListPage);
        }
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  googleLogin(){
      this.authProvider.googleLogin().then(()=>{
          this.navCtrl.setRoot(ListPage);
      });
  }

}
