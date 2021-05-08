import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { AnimeRoutingModule } from './anime-routing.module';

@NgModule({
  declarations: [AnimeComponent],
  imports: [CommonModule, AnimeRoutingModule],
})
export class AnimeModule {}
