import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(item: any, args?: any): any {
     if (!item) {
            return item;
      }
    return item.filter(item => item.option === args);
  }

}
