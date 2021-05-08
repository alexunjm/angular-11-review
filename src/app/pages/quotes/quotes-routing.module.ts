import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesComponent } from './quotes.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent,
    children: [
      {
        path: 'random',
        loadChildren: () =>
          import('@pages/quotes/routes/random/random.module').then(
            (m) => m.RandomModule
          ),
      },
      {
        path: 'anime',
        loadChildren: () =>
          import('@pages/quotes/routes/anime/anime.module').then(
            (m) => m.AnimeModule
          ),
      },
      {
        path: 'character',
        loadChildren: () =>
          import('@pages/quotes/routes/character/character.module').then(
            (m) => m.CharacterModule
          ),
      },
      { path: '**', redirectTo: 'random' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
