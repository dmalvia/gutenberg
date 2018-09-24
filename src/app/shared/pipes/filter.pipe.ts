import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
	searchText = searchText.toLowerCase();
return items.filter( it => {
		var text1 = JSON.stringify(it);
        return text1.toLowerCase().includes(searchText)
    })
  }
}