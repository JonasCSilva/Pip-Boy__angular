import { Component } from '@angular/core'

@Component({
  selector: 'app-map',
  template: `
    <div class="container">
      <img src="../../assets/fallout4map.jpg" />
    </div>
  `,
  styles: [
    `
      :host {
        flex: 1 1 auto;
      }

      .container {
        height: 100%;
        padding: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container > img {
        width: inherit;
        height: inherit;
      }
    `
  ]
})
export class MapComponent {}
