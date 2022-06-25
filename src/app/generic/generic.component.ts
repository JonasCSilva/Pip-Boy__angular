import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-generic',
  template: `<p>generic works!</p>`,
  styles: ['']
})
export class GenericComponent implements OnInit {
  ngOnInit(): void {}
}
