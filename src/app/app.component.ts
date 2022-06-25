import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core'

import { ElementsService } from './services/elements.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('link') components!: QueryList<ElementRef<HTMLAnchorElement>>

  constructor(private elementsService: ElementsService) {}

  pagesNames = ['stat', 'inv', 'data', 'map', 'radio']

  ngOnInit() {}

  ngAfterViewInit() {
    const temp = this.components.toArray()
    for (const component of temp) {
      const { x, width } = component.nativeElement.getBoundingClientRect()
      this.elementsService.lefts.push(x + width / 2)
    }
  }
}
