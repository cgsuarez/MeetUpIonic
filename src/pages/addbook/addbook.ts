import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Book } from '../../models/book';

import { LibraryProvider } from '../../providers/library/library';

@IonicPage()
@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html',
})
export class AddbookPage {

  book: Book = {
    isbn: '',
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alrtCtrl: AlertController,
  public libraryProvider: LibraryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookPage');
  }

  addBook(addBookForm: any){

      console.log(JSON.stringify(this.book));
      this.libraryProvider.addBook(this.book).then((result)=>{

          addBookForm.form.reset();

          let alert = this.alrtCtrl.create({
              title: 'Confirmacion',
              subTitle: 'Se ha registrado un libro de manera exitosa',
              buttons: ['OK']
          });

          alert.present();
      });

  }

}
