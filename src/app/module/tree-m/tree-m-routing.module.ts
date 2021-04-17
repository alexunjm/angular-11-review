import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeafComponent } from './leaf/leaf.component';

import { TreeMComponent } from './tree-m.component';

const routes: Routes = [
  { path: '', component: TreeMComponent },
  { path: 'leaf', component: LeafComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeMRoutingModule {}
