import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { InvComponent } from './inv/inv.component';
import { MapComponent } from './map/map.component';
import { RadioComponent } from './radio/radio.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  { path: 'stat', component: StatComponent },
  { path: 'inv', component: InvComponent },
  { path: 'data', component: DataComponent },
  { path: 'map', component: MapComponent },
  { path: 'radio', component: RadioComponent },
  { path: '', redirectTo: '/stat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
