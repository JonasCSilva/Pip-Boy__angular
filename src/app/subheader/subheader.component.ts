import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter, map, Observable, take } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import {} from "@angular/router";

@Component({
  selector: "app-subheader",
  templateUrl: "./subheader.component.html",
  styleUrls: ["./subheader.component.scss"],
})
export class SubheaderComponent implements OnInit {
  @ViewChildren("cmp") components!: QueryList<HTMLAnchorElement>;

  subPagesNames: string[] = [];
  selectedSubPageName!: string;

  constructor(private router: Router, route: ActivatedRoute) {
    const test = route.data.pipe(take(1));
    console.log(route.snapshot.data);

    test.subscribe((x) => {
      this.subPagesNames = Object.values(x);
    });

    const url: Observable<string> = route.url.pipe(
      map((segments) => segments.join(""))
    );
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: any) => {
        this.selectedSubPageName = urlAfterRedirects.slice(1);
      });
  }

  ngAfterViewInit() {
    // console.log(this.components.toArray());
  }
}
