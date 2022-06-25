import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pagesNames = ['stat', 'inv', 'data', 'map', 'radio']

  doSomething(event: MouseEvent) {
    const element = event.target as HTMLAnchorElement
    const { x, width } = element.getBoundingClientRect()
    console.log(x + width / 2)
  }
}
