import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'clc', loadChildren: () => import('./pages/component-life-cycle/component-life-cycle.module').then(m => m.ComponentLifeCycleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
