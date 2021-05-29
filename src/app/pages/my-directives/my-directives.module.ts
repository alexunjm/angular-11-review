import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDirectivesRoutingModule } from './my-directives-routing.module';
import { MyDirectivesComponent } from './my-directives.component';
import { HighlightTextDirective } from '../../highlight-text.directive';


@NgModule({
  declarations: [MyDirectivesComponent, HighlightTextDirective],
  imports: [
    CommonModule,
    MyDirectivesRoutingModule
  ]
})
export class MyDirectivesModule { }
