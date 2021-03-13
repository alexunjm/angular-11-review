import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderSimpleLoopComponent } from './components/example-01/render-simple-loop/render-simple-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderSimpleLoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
