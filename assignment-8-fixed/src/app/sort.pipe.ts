import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: Object[]): unknown {
    console.log(value);
    return(value.sort(
      (a: {
        instanceType: string,
        name: string,
        status: string,
        started: Date
      },
      b: {
        instanceType: string,
        name: string,
        status: string,
        started: Date
      }) => {
      return(a.name.localeCompare(b.name));
    }));
  }
}
