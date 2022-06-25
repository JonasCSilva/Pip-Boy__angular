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
import { ActivatedRoute /*, NavigationEnd, Router */ } from '@angular/router'

import { ElementsService } from '../services/elements.service'
// import { filter } from 'rxjs'

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
  newLeft!: string

  constructor(
    private route: ActivatedRoute,
    /* private router: Router, */ private elementsService: ElementsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subPagesNames = Object.values(this.route.snapshot.data)

    /* this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((data: any) => console.log(data.urlAfterRedirects)) */
  }

  ngAfterViewInit() {
    const elements = this.components.toArray()
    for (const element of elements) {
      this.widths.push(element.nativeElement.getBoundingClientRect().width)
    }
    const temp = this.elementsService.lefts[0] - this.widths[0] - 16 - this.widths[1] / 2
    this.newLeft = temp + 'px'

    this.cd.detectChanges()
  }
}
