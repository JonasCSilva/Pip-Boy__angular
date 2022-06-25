import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  private width!: number
  lefts: number[] = []

  constructor(@Inject(DOCUMENT) private document: Document) {
    const window = this.document.defaultView as Window
    this.width = window.innerWidth
  }
}
