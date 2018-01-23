import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    } else {
      if (typeof filter === 'number') {
        console.log('pénisz');
        return items.filter(
          contact => contact.phoneNumber.indexOf(filter) !== -1
        );
      } else {
        return items.filter(
          contact =>
            (contact.firstName + contact.lastName).indexOf(filter) !== -1
        );
      }
    }
  }
}
