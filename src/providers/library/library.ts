import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Book } from '../../models/book';

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
    return this.booksCollection.add({
      isbn: book.isbn,
      name: book.name
    });
  }

}
