import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    const components = value.split("");
    const reversedComponents = components.reverse();
    const reversedString = reversedComponents.join("");
    return(reversedString);
  }

}
