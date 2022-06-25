import { Component, OnInit, QueryList, ViewChildren } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  @ViewChildren('cmp') components!: QueryList<HTMLAnchorElement>

  subPagesNames: string[] = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subPagesNames = Object.values(this.route.snapshot.data)
  }
}
