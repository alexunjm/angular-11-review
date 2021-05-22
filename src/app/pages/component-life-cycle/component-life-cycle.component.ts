import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.scss'],
})
export class ComponentLifeCycleComponent {
  msg = '';
  counter = 0;

  constructor() {
    this.msg = 'qué pasará?';
  }

  logMsg() {
    console.log(this.msg);
  }
}
