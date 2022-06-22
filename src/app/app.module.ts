import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { StatusComponent } from './stat/status/status.component';
import { SpecialComponent } from './stat/special/special.component';
import { PerksComponent } from './stat/perks/perks.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    StatusComponent,
    SpecialComponent,
    PerksComponent,
    MapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
