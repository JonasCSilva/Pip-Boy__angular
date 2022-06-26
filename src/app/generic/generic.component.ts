import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-generic',
  template: `<main><p>generic works!</p></main>`,
  styles: [
    `
      :host {
        flex: 1 1 auto;
      }

      main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class GenericComponent implements OnInit {
  ngOnInit(): void {}
}
