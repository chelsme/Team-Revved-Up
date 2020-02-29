import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, fromEvent } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public isMobile = new BehaviorSubject<boolean>(window.innerWidth <= 575)
  private resizeObservable: Observable<Event>

  constructor() {
    this.resizeObservable = fromEvent(window, 'resize')
    this.resizeObservable.subscribe(() => this.widthCheck())
  }

  private widthCheck() {
    this.isMobile.next(window.innerWidth <= 575)
    console.log('is mobile? ', window.innerWidth, this.isMobile.value)
  }
}
