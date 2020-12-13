import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectiveExampleDirective } from './directive-example.directive';
import { EjemploFiltroPipe } from './ejemplo-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectiveExampleDirective,
    EjemploFiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
