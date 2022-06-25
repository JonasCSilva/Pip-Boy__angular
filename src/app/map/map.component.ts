import { Component } from '@angular/core'

@Component({
  selector: 'app-map',
  template: `<div id="container">
    <img src="../../assets/fallout4map.jpg" id="map" />
  </div>`,
  styles: [
    `
      #map {
        height: 98%;
      }

      #container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class MapComponent {}
