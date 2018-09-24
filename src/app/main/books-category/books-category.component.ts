import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.css']
})
export class BooksCategoryComponent implements OnInit {

  /* Variables declaration*/
  genreList:any[] = [];  
  constructor(private router: Router) { }

  ngOnInit() {
  	this.genreList = ["FICTION", "DRAMA", "HUMOR", "POLITICS", "PHILOSOPHY", "HISTORY", "ADVENTURE"];
  }

  routeToBooksList(val) {
  	sessionStorage.setItem('genre', val);
  	this.router.navigate(['/booklist']);
  }

}
