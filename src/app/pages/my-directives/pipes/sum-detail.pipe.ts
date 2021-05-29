import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumDetail',
})
export class SumDetailPipe implements PipeTransform {
  transform(value: Array<number>, ...args: unknown[]): string {
    return `${value.join(' + ')} = ${value.reduce((acc, val) => acc + val, 0)}`;
  }
}
