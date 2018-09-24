import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksCategoryComponent } from './main/books-category/books-category.component';     
import { BooksListComponent } from './main/books-list/books-list.component'; 

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: BooksCategoryComponent
    },
    {
        path: 'booklist',
        component: BooksListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }