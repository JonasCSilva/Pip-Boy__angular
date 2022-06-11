import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatComponent } from './stat/stat.component';
import { InvComponent } from './inv/inv.component';
import { DataComponent } from './data/data.component';
import { MapComponent } from './map/map.component';
import { RadioComponent } from './radio/radio.component';
import { StatusComponent } from './stat/status/status.component';
import { SpecialComponent } from './stat/special/special.component';
import { PerksComponent } from './stat/perks/perks.component';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    InvComponent,
    DataComponent,
    MapComponent,
    RadioComponent,
    StatusComponent,
    SpecialComponent,
    PerksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
