import { Component, OnInit } from '@angular/core';
import {
  BorrowedBookResponse,
  PageResponseBookResponse,
  PageResponseBorrowedBookResponse,
} from 'src/app/services/models';
import { FeedbackRequest } from '../../../../services/models/feedback-request';
import { BookService } from 'src/app/services/services';

@Component({
  selector: 'app-returned-book',
  templateUrl: './returned-book.component.html',
  styleUrls: ['./returned-book.component.scss'],
})
export class ReturnedBookComponent implements OnInit {
  page = 0;
  size = 5;
  pages: any = [];
  returnedBooks: PageResponseBorrowedBookResponse = {};
  message = '';
  level: 'success' | 'error' = 'success';
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.findAllReturnedBooks();
  }

  private findAllReturnedBooks() {
    this.bookService
      .findAllReturnedBooks({
        // page: this.page,
        // size: this.size,
      })
      .subscribe({
        next: (resp) => {
          this.returnedBooks = resp;
          this.pages = Array(this.returnedBooks.totalPages)
            .fill(0)
            .map((x, i) => i);
        },
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReturnedBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReturnedBooks();
  }

  goToLastPage() {
    this.page = (this.returnedBooks.totalPages as number) - 1;
    this.findAllReturnedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedBooks();
  }

  get isLastPage() {
    return this.page === (this.returnedBooks.totalPages as number) - 1;
  }

  approveBookReturn(book: BorrowedBookResponse) {
    if (!book.returned) {
      this.level = 'error';
      this.message = 'The book is not yet returned';
      return;
    }
    this.bookService
      .approveReturnBorrowBook({
        'book-id': book.id as number,
      })
      .subscribe({
        next: () => {
          this.level = 'success';
          this.message = 'Book return approved';
          this.findAllReturnedBooks();
        },
      });
  }
}
