import {Component} from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'ContactList',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public Contacts;

  public Contact_name;

  private filter;

  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this._apiService.getContacts().subscribe(
      // the first argument is a function which runs on success
      data => { this.Contacts = data['_embedded']['contacts']; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading Contacts')
    );
  }

  setFilter(event) {
    this.filter = event.target.value;
  }

  createContact(name) {
    const Contact = {name: name};
    this._apiService.createContact(Contact).subscribe(
       data => {
         // refresh the list
         this.getContacts();
         return true;
       },
       error => {
         console.error('Error saving Contact!');
         return Observable.throw(error);
       }
    );
  }

  updateContact(Contact) {
    this._apiService.updateContact(Contact).subscribe(
       data => {
         // refresh the list
         this.getContacts();
         return true;
       },
       error => {
         console.error('Error saving Contact!');
         return Observable.throw(error);
       }
    );
  }

  deleteContact(Contact) {
    if (confirm('Are you sure you want to delete " + Contact.name + "?')) {
      this._apiService.deleteContact(Contact).subscribe(
         data => {
           // refresh the list
           this.getContacts();
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
