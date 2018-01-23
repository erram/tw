import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class APIService {

    constructor(private http: HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.

    // Uses http.get() to load data from a single API endpoint
    getContacts() {
        return this.http.get('http://localhost:8080/contacts');
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.

    // send a POST request to the API to create a new data object
    createContact(Contact) {
        const body = JSON.stringify(Contact);
        return this.http.post('http://localhost:8080/contacts', body, httpOptions);
    }

    // send a PUT request to the API to update a data object
    updateContact(Contact) {
        const body = JSON.stringify(Contact);
        return this.http.put('http://localhost:8080/contacts' + Contact.id, body, httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    deleteContact(Contact) {
        return this.http.delete('http://localhost:8080/contacts' + Contact.id);
    }

}
