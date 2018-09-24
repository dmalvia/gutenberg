import { Injectable }  from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BooksService {

  constructor(private httpService: HttpClient) { }

  getBooksList(genre) {
  	let serviceUrl = environment.baseUrl+"books?search="+genre+"&mime_type=image/jpeg";
  	return this.httpService.get(serviceUrl).pipe(map(res => {
	  		return res;
	  	})
  	)
  }

  getMoreBooksList(serviceUrl) {
  	return this.httpService.get(serviceUrl).pipe(map(res => {
	  		return res;
	  	})
  	)
  }
}
