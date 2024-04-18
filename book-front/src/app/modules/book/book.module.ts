import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    MenuComponent,
    BookListComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [CommonModule, BookRoutingModule, FormsModule],
})
export class BookModule {}
