import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-directives',
    loadChildren: () =>
      import('./pages/my-directives/my-directives.module').then(
        (m) => m.MyDirectivesModule
      ),
  },
  {
    path: '**/*',
    redirectTo: '/my-directives',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
