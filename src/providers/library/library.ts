import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/forkJoin';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable()
export class LibraryProvider {

   booksCollection: AngularFirestoreCollection<Book>;
   books: Observable<Book[]>;

  constructor(public afs: AngularFirestore) {
      this.booksCollection = this.afs.collection('books');
  }

  getBooks(){
  	 this.books = this.booksCollection.valueChanges();
  	 return this.books;
  }

  addBook(book: Book){
  		return this.booksCollection.add({isbn: book.isbn, name: book.name});
  }

}
