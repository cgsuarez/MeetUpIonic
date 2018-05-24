import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Book } from '../../models/book';
import { AlertController } from 'ionic-angular';

import { LibraryProvider } from '../../providers/library/library';

/**
 * Generated class for the AddbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html',
})
export class AddbookPage {

  private book: Book;

  constructor(public navCtrl: NavController,
  	public alrCtrl: AlertController,
  	public libraryProvider: LibraryProvider,
   	 public navParams: NavParams) {
	this.book = new Book();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookPage');
  }

  onAddBook(addBookForm: any){

    let alert = this.alrCtrl.create({
    	title: 'Confirmacion',
    	subTitle: 'Se ha registrado un nuevo libro',
    	buttons: ['OK']
    });

    alert.present();

   	console.log('addBook: ' + JSON.stringify(this.book));
   	this.libraryProvider.addBook(this.book).then((result)=>{
   		this.book = {};
   		addBookForm.form.reset();
   		console.log('ok');
   		//alert.dismiss();
   	}).catch((error)=>{
		console.log('error: ' + error);
		//alert.dismiss();
   	});
   	
  }

}