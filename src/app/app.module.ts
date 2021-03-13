import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderSimpleLoopComponent } from './components/example-01/render-simple-loop/render-simple-loop.component';
import { RenderLoopTrackByFnComponent } from './components/example-02/render-loop-track-by-fn/render-loop-track-by-fn.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderSimpleLoopComponent,
    RenderLoopTrackByFnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
