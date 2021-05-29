import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDirectivesRoutingModule } from './my-directives-routing.module';
import { MyDirectivesComponent } from './my-directives.component';


@NgModule({
  declarations: [MyDirectivesComponent],
  imports: [
    CommonModule,
    MyDirectivesRoutingModule
  ]
})
export class MyDirectivesModule { }
