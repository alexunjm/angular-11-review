import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejemploFiltro'
})
export class EjemploFiltroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
