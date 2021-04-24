import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeMRoutingModule } from './tree-m-routing.module';
import { TreeMComponent } from './tree-m.component';


@NgModule({
  declarations: [TreeMComponent],
  imports: [
    CommonModule,
    TreeMRoutingModule
  ]
})
export class TreeMModule { }
