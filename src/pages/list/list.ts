import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Book } from '../../models/book';

import { LibraryProvider } from '../../providers/library/library';

import { AddbookPage } from '../addbook/addbook';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {


  books: Book[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public libraryProvider: LibraryProvider) {
  }

  ionViewDidLoad() {
     this.libraryProvider.getBooks().subscribe((books)=>{
        this.books = books;
     });
  }

  goToAddPage(){
    this.navCtrl.push(AddbookPage);
  }

}
