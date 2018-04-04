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

    // Uses http.get() to load data from a single API endpoint
    getBooks() {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    }

    // send a POST request to the API to create a new data object
    createBook(Book) {
        const body = JSON.stringify(Book);
        return this.http.post('http://localhost:8080/contacts', body, httpOptions);
    }

    // send a PUT request to the API to update a data object
    updateBook(Book) {
        const body = JSON.stringify(Book);
        return this.http.put('http://localhost:8080/contacts' + Book.id, body, httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    deleteBook(Book) {
        return this.http.delete('http://localhost:8080/contacts' + Book.id);
    }

}
