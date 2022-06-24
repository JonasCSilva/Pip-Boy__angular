import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pip-boy";
  pagesNames = ["stat", "inv", "data", "map", "radio"];

  constructor(private router: Router) {}

  doSomething(event: MouseEvent) {
    const element = event.target as HTMLAnchorElement;
    const { x, width } = element.getBoundingClientRect();
    console.log(x + width / 2);
  }
}
