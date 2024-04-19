import { Component, OnInit } from '@angular/core';
import {
  BorrowedBookResponse,
  FeedbackRequest,
  PageResponseBorrowedBookResponse,
} from 'src/app/services/models';
import { BookService, FeedbackService } from 'src/app/services/services';

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrls: ['./borrowed-book-list.component.scss'],
})
export class BorrowedBookListComponent implements OnInit {
  borrowedBooks: PageResponseBorrowedBookResponse = {};
  page = 0;
  size = 5;
  selectedBook: BorrowedBookResponse | undefined = undefined;
  feedbakRequest: FeedbackRequest = { bookId: 0, comment: '', note: 0 };
  constructor(
    private bookService: BookService,
    private feedbackService: FeedbackService
  ) {
    this.findAllBorrowedBooks();
  }

  ngOnInit(): void {}

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = book;
    this.feedbakRequest.bookId = book.id as number;
  }

  findAllBorrowedBooks() {
    this.bookService
      .findAllBorrowedBooks({
        // page: this.page,
        // size: this.size,
      })
      .subscribe({
        next: (res) => {
          this.borrowedBooks = res;
        },
      });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedBooks();
  }
  goToPreviousPage() {
    this.page--;
    this.findAllBorrowedBooks();
  }
  goToPage(page: number) {
    this.page = page;
    this.findAllBorrowedBooks();
  }
  goToNextPage() {
    this.page++;
    this.findAllBorrowedBooks();
  }
  goToLastPage() {
    this.page = (this.borrowedBooks.totalPages as number) - 1;
    this.findAllBorrowedBooks();
  }

  get isLastPage() {
    return this.page === (this.borrowedBooks.totalPages as number) - 1;
  }

  returnBook(withFeedback: boolean) {
    this.bookService
      .returnBorrowBook({
        'book-id': this.selectedBook?.id as number,
      })
      .subscribe({
        next: () => {
          if (withFeedback) {
            this.giveFeedback();
          }
          this.selectedBook = undefined;
          this.findAllBorrowedBooks();
        },
      });
  }
  private giveFeedback() {
    this.feedbackService
      .saveFeedback({
        body: this.feedbakRequest,
      })
      .subscribe({
        next: () => {},
      });
  }
}
