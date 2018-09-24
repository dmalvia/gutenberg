import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksListComponent } from './main/books-list/books-list.component';
import { BooksCategoryComponent } from './main/books-category/books-category.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './shared/services/books.service';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksCategoryComponent,
    SearchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
