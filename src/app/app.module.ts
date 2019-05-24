import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import AngularComponents from '../components/angularComponents';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
