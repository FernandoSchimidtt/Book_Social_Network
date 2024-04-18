import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookResponse } from 'src/app/services/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  private __bookCover: string | undefined;
  private _book: BookResponse = {};
  private _manage: boolean = false;

  get bookCover(): string | undefined {
    if (this._book.cover) {
      return 'data:image/jpg;base64, ' + this.book.cover;
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
  }

  get book(): BookResponse {
    return this._book;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }

  get manage(): boolean {
    return this._manage;
  }
  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  @Output() private share: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();
  @Output() private archive: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();
  @Output() private addToWaitingList: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();
  @Output() private borrow: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();
  @Output() private edit: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();
  @Output() private details: EventEmitter<BookResponse> =
    new EventEmitter<BookResponse>();

  onShowDetails() {
    this.details.emit(this._book);
  }
  onBorrow() {
    this.borrow.emit(this._book);
  }
  onAddToWaitingList() {
    this.borrow.emit(this._book);
  }
  onEdit() {
    this.borrow.emit(this._book);
  }
  onShare() {
    this.borrow.emit(this._book);
  }
  onArchive() {
    this.borrow.emit(this._book);
  }
}
