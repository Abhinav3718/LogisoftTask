import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(value: any, searchTerm: any): unknown {
    return value.filter(record => record.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
    || record.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }

}
