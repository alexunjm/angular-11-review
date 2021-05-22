import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/form-example.module').then(
        (m) => m.FormExampleModule
      ),
  },
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
