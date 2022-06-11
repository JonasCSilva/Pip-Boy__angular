import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatComponent } from './stat/stat.component';
import { InvComponent } from './inv/inv.component';
import { DataComponent } from './data/data.component';
import { MapComponent } from './map/map.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    InvComponent,
    DataComponent,
    MapComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
