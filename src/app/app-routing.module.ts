import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerksComponent } from './stat/perks/perks.component';
import { SpecialComponent } from './stat/special/special.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { StatusComponent } from './stat/status/status.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: 'stat',
    component: SubheaderComponent,
    data: ['status', 'special', 'perks'],
    children: [
      {
        path: 'status',
        component: StatusComponent,
      },
      {
        path: 'special',
        component: SpecialComponent,
      },
      {
        path: 'perks',
        component: PerksComponent,
      },
      { path: '', redirectTo: 'status', pathMatch: 'full' },
    ],
  },
  {
    path: 'inv',
    component: SubheaderComponent,
    data: ['weapons', 'apparel', 'aid', 'misc', 'junk', 'mods', 'ammo'],
  },
  {
    path: 'data',
    component: SubheaderComponent,
    data: ['quests', 'workshops', 'stats'],
  },
  { path: 'map', component: MapComponent },
  // { path: 'radio', component:  },
  { path: '', redirectTo: '/stat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
