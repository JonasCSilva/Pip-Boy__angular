import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-status',
  template: `<img src="../../../assets/vaultboy.gif" id="gif" />`,
  styles: [
    `
      #gif {
        width: 220px;
      }
    `
  ]
})
export class StatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
