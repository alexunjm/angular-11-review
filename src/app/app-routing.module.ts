import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SecondComponent } from './pages/second/second.component';
import { TreeLayoutComponent } from './pages/tree-layout/tree-layout.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'tree-m',
    component: TreeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/pages/tree-m/tree-m.module').then(
            (m) => m.TreeMModule
          ),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
