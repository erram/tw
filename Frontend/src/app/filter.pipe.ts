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
        return items.filter(
          book =>
            (book.volumeInfo.title).indexOf(filter) !== -1
        );
    }
  }
}
