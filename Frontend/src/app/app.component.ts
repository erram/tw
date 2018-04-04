import {Component} from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'ContactList',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public Books;

  public Contact_name;

  private filter;

  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._apiService.getBooks().subscribe(
      // the first argument is a function which runs on success
      data => {this.Books = data['items']; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log(this.Books)//console.log('done loading Books')
    );
  }

  setFilter(event) {
    this.filter = event.target.value;
  }
/*
  createBook(Book) {
    const Contact = {name: name};
    this._apiService.createBook(Book).subscribe(
       data => {
         // refresh the list
         this.getBooks();
         return true;
       },
       error => {
         console.error('Error saving Book!');
         return Observable.throw(error);
       }
    );
  }*/

  updateBook(Book) {
    this._apiService.updateBook(Book).subscribe(
       data => {
         // refresh the list
         this.getBooks();
         return true;
       },
       error => {
         console.error('Error saving Book!');
         return Observable.throw(error);
       }
    );
  }

  deleteBook(Book) {
    if (confirm('Are you sure you want to delete " + Book.name + "?')) {
      this._apiService.deleteBook(Book).subscribe(
         data => {
           // refresh the list
           this.getBooks();
           return true;
         },
         error => {
           console.error('Error deleting Contact!');
           return Observable.throw(error);
         }
      );
    }
  }
}
