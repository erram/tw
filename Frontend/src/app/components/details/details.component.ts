import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'app/model/book.model';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ngb-book-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();
  constructor(private router: Router) { }

  ngOnInit() {
  }


  /**
   * Tip: Utilize getters to keep templates clean
   */
  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail() {
    return this.book.volumeInfo.imageLinks
      && this.book.volumeInfo.imageLinks.smallThumbnail;
  }

}
