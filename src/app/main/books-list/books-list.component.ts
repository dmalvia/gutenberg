import { Component, OnInit, HostListener } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { DomSanitizer } from '@angular/platform-browser';import { DOCUMENT } from "@angular/platform-browser";
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  
  /* Variables declaration*/
  selectedGenre:string;
  booksListArray:any[] = [];
  searchText:string;
  booksListObj:any;
  constructor(private bService: BooksService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.selectedGenre = sessionStorage.getItem("genre");
  	console.log("What is my genre " + this.selectedGenre);
  	this.fetchBooks();
  }

  fetchBooks() {
  	let genre = this.selectedGenre.toLowerCase();
  	this.bService.getBooksList(genre).subscribe(res => {
  		this.booksListObj = res;
  		let booksList = res;
  		this.booksListArray = booksList['results'];
  	})
  }

  getSearchQuery(e) {
  	this.searchText = e;
  	console.log("The search query is " + this.searchText)
  }

  openBookToRead(item) {
  	console.log("THe item is ", item);
  	if(item.formats['text/html; charset=iso-8859-1']) {
  		window.open(item.formats['text/html; charset=iso-8859-1'],'_blank');
  	}
  	else if(item.formats['application/x-mobipocket-ebook']) {
  		window.open(item.formats['application/x-mobipocket-ebook'],'_blank');
  	}
  	else if(item.formats['text/plain']) {
  		window.open(item.formats['text/plain'],'_blank');
  	}
  	else {
  		alert("No viewable version available");
  	}
  }

  fetchMoreBooks(item) {
  	this.bService.getMoreBooksList(item).subscribe(res => {
  		this.booksListObj.res;
  		let booksList = res;
  		this.booksListArray = this.booksListArray.concat(booksList['results']);
  		console.log("The update Array List is ",this.booksListArray);
  		console.log("The update Array List is ",booksList['results']);
  	})
  }

  @HostListener("window:scroll", [])
	onScroll(): void {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			if(this.booksListObj.next) {
				this.fetchMoreBooks(this.booksListObj.next);
			}
	    }
	}
}


