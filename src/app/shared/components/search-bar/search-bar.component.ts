import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() onfilterChange = new EventEmitter<any>();
  searchText:any;	
  searchFilter: Subject<any> = new Subject<any>();
  constructor(private router:Router) { }

  ngOnInit() {
  	this.searchFilter.pipe(debounceTime(500),distinctUntilChanged()).subscribe(val => {
  		  this.onfilterChange.emit(val);
  	})
  }


  change(e) {
  	this.searchFilter.next(e);
  }
  navigateToHome() {
  	this.router.navigate(['/']);
  }
}
