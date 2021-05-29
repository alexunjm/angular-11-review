import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDirectivesComponent } from './my-directives.component';

const routes: Routes = [{ path: '', component: MyDirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDirectivesRoutingModule { }
