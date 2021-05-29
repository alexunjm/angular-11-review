import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDirectivesRoutingModule } from './my-directives-routing.module';
import { MyDirectivesComponent } from './my-directives.component';
import { Example1Component } from './components/example1/example1.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';

@NgModule({
  declarations: [
    MyDirectivesComponent,
    HighlightTextDirective,
    Example1Component,
  ],
  imports: [CommonModule, MyDirectivesRoutingModule],
})
export class MyDirectivesModule {}
