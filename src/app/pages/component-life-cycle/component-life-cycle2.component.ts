import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: '{{this.msg}} {{this.fnCall()}}',
})
export class ComponentLifeCycleComponent2
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() msg = '';
  counter = 0;
  constructor() {
    this.msg = 'qué pasará?';
  }

  ngOnInit(): void {
    console.log({ ngOnInit: 'no args' });
    console.log(
      '----- Iniciando tiempo de espera para actualizar datos del componente -----'
    );
    setTimeout(() => {
      this.msg = 'actualizando mensaje ' + ++this.counter;
    }, 4000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ ngOnChanges: changes });
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }
  ngDoCheck(): void {
    console.log({ ngDoCheck: 'no args' });
  }
  ngAfterContentInit(): void {
    console.log({ ngAfterContentInit: 'no args' });
  }
  ngAfterContentChecked(): void {
    console.log({ ngAfterContentChecked: 'no args' });
  }
  ngAfterViewInit(): void {
    console.log({ ngAfterViewInit: 'no args' });
  }
  ngAfterViewChecked(): void {
    console.log({ ngAfterViewChecked: 'no args' });
  }
  ngOnDestroy(): void {
    console.log({ ngOnDestroy: 'no args' });
  }

  fnCall() {
    console.log('fnCall');
    /* 
    for (let i = 0; i < 10; i++) {
      this.msg += '-';
    } */
  }
}
