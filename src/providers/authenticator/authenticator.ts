import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticatorProvider {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
  		private gplus: GooglePlus,
  		private platform: Platform) { 
  		this.user = this.afAuth.authState;
  }

  getUserInfo(){
  	return this.user;
  }

  googleLogin(){
  	if(this.platform.is('cordova')){
  		return this.nativeGoogleLogin();
  	}else{
  		return this.webGoogleLogin();
  	}
  }

  async nativeGoogleLogin(): Promise<void>{
  	try{
  		const gplusUser = await this.gplus.login({
  			'webClientId': '554540938006-epe2bjscom78tv2oeovfjeva7gal0va0.apps.googleusercontent.com',
  			'offline': true,
  			'scopes': 'profile email'
  		});

  		return await this.afAuth.auth.signInWithCredential(
  			firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
  		);
  	}catch(err){
  		console.log(err);
  	}

  }


 async webGoogleLogin(): Promise<void>{
  	try{
  		const provider = new firebase.auth.GoogleAuthProvider();
  		const credential = await this.afAuth.auth.signInWithPopup(provider);
  		return credential;
  	}catch(err){
  		console.log(err);
  	}
  }

  logoff(){
  	this.afAuth.auth.signOut();
  	if(this.platform.is('cordova')){
  		this.gplus.logout();
  	}
  }


}
