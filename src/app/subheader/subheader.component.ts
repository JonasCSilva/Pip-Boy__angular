import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

import { ElementsService } from '../services/elements.service'

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit, AfterViewInit {
  @ViewChildren('link') components!: QueryList<ElementRef<HTMLAnchorElement>>
  @ViewChild('header') component!: ElementRef<HTMLDivElement>

  subPagesNames: string[] = []
  widths: number[] = []
  index!: number
  newLeft!: string
  url!: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementsService: ElementsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subPagesNames = Object.values(this.route.snapshot.data)

    this.url = this.router.url.split('/').pop()!
    this.customFind()

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(({ urlAfterRedirects }: any) => {
      this.url = urlAfterRedirects.split('/').pop()!
      this.customFind()
      this.updateLeft()
    })
  }

  ngAfterViewInit() {
    const elements = this.components.toArray()
    for (const element of elements) {
      this.widths.push(element.nativeElement.getBoundingClientRect().width)
    }

    this.updateLeft()

    this.cd.detectChanges()
  }

  customFind() {
    this.index = this.subPagesNames.findIndex(value => value === this.url)
  }

  updateLeft() {
    let aux = 0
    for (let i = 0; i < this.index; i++) {
      aux += this.widths[i] + 16
    }
    const temp = this.elementsService.lefts[2] - 16 - aux - this.widths[this.index] / 2
    this.newLeft = temp + 'px'
  }
}
