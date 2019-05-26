import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppComponent } from './main/app.component';
import AngularComponents from '../components/angularComponents';
import { BackgroundComponent } from './menu/background/background.component';
import { ForegroundComponent } from './menu/foreground/foreground.component';
import { SunlightComponent } from './miniapps/sunlight/sunlight.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ForegroundComponent,
    SunlightComponent,

  ],
  imports: [
    BrowserModule,
    AngularComponents,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
