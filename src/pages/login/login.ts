import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthenticatorProvider } from '../../providers/authenticator/authenticator';

import { ListPage } from '../list/list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			public authProvider: AuthenticatorProvider) {
  }

  ionViewWillEnter(){
  	  this.authProvider.getUserInfo().subscribe((user)=>{
  	  	console.log('user: ' + JSON.stringify(user));
  	  	if(user){
  	  		this.navCtrl.setRoot(ListPage);
  	  	}
  	  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doGoogleLogin(){
  		this.authProvider.googleLogin().then(()=>{
  			console.log('auth: ok');

  		},
  		(err)=>{
  			console.log('err: ' + err);
  		});
  }

}
