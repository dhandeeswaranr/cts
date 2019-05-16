import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removejunk'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === undefined ? '' : value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  }

}