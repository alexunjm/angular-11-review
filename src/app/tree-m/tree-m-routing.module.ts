import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeMComponent } from './tree-m.component';

const routes: Routes = [{ path: '', component: TreeMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeMRoutingModule { }
