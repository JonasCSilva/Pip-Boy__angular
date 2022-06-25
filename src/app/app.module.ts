import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GenericComponent } from './generic/generic.component'
import { MapComponent } from './map/map.component'
import { PerksComponent } from './stat/perks/perks.component'
import { SpecialComponent } from './stat/special/special.component'
import { StatusComponent } from './stat/status/status.component'
import { SubheaderComponent } from './subheader/subheader.component'

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    StatusComponent,
    SpecialComponent,
    PerksComponent,
    MapComponent,
    GenericComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
