import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'quotes',
    loadChildren: () =>
      import('@pages/quotes/quotes.module').then((m) => m.QuotesModule),
  },
  { path: '**', redirectTo: 'quotes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
