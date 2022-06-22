import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pip-boy';
  pagesNames = ['stat', 'inv', 'data', 'map', 'radio'];
  selectedPageName!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: any) => {
        this.selectedPageName = (urlAfterRedirects as string).split('/')[1];
        /* .getBoundingClientRect() */
      });
  }

  doSomething(event: MouseEvent) {
    const element = event.target as HTMLAnchorElement;
    const { x, width } = element.getBoundingClientRect();
    console.log(x + width / 2);
  }
}
