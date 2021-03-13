import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderIfComponent } from './components/example-01/render-if/render-if.component';
import { RenderIfExpandedSintaxComponent } from './components/example-02/render-if-expanded-sintax/render-if-expanded-sintax.component';
import { RenderIfElseComponent } from './components/example-03/render-if-else/render-if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderIfComponent,
    RenderIfExpandedSintaxComponent,
    RenderIfElseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
