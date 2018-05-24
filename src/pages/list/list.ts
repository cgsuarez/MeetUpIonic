import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";

import { LibraryProvider } from '../../providers/library/library';

import { AddbookPage } from '../addbook/addbook';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

   private books: Book[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public libraryProvider: LibraryProvider,
    public storage: AngularFirestore) {
  }

  public ionViewDidLoad() {
      this.libraryProvider.getBooks().subscribe( (books) => {
        console.log('books: ' + JSON.stringify(books));
          this.books = books;
      });
  }

  public ionViewWillUnload() {

  }

  onAddBookButton(){
    this.navCtrl.push(AddbookPage);
  }


}
