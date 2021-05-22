import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentLifeCycleComponent } from './component-life-cycle.component';

const routes: Routes = [{ path: '', component: ComponentLifeCycleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLifeCycleRoutingModule { }
