import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persona'
})
export class PersonaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
