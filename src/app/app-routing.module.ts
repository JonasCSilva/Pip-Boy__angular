import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GenericComponent } from './generic/generic.component'
import { MapComponent } from './map/map.component'
import { PerksComponent } from './stat/perks/perks.component'
import { SpecialComponent } from './stat/special/special.component'
import { StatusComponent } from './stat/status/status.component'
import { SubheaderComponent } from './subheader/subheader.component'

const routes: Routes = [
  {
    path: 'stat',
    component: SubheaderComponent,
    data: ['status', 'special', 'perks'],
    children: [
      {
        path: 'status',
        component: StatusComponent
      },
      {
        path: 'special',
        component: SpecialComponent
      },
      {
        path: 'perks',
        component: PerksComponent
      },
      { path: '', redirectTo: 'status', pathMatch: 'full' }
    ]
  },
  {
    path: 'inv',
    component: SubheaderComponent,
    data: ['weapons', 'apparel', 'aid', 'misc', 'junk', 'mods', 'ammo'],
    children: [
      {
        path: 'weapons',
        component: GenericComponent
      },
      {
        path: 'apparel',
        component: GenericComponent
      },
      {
        path: 'aid',
        component: GenericComponent
      },
      {
        path: 'misc',
        component: GenericComponent
      },
      {
        path: 'junk',
        component: GenericComponent
      },
      {
        path: 'mods',
        component: GenericComponent
      },
      {
        path: 'ammo',
        component: GenericComponent
      },
      { path: '', redirectTo: 'weapons', pathMatch: 'full' }
    ]
  },
  {
    path: 'data',
    component: SubheaderComponent,
    data: ['quests', 'workshops', 'stats']
  },
  { path: 'map', component: MapComponent },
  // { path: 'radio', component:  },
  { path: '', redirectTo: '/stat/status', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
