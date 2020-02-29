import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, fromEvent } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public hamburgerMenu = new BehaviorSubject<boolean>(
    window.innerWidth <= 950 && 700 <= window.innerWidth
  )
  public isMobile = new BehaviorSubject<boolean>(window.innerWidth <= 700)
  public hamburgerOpen = new BehaviorSubject<boolean>(false)
  private resizeObservable: Observable<Event>

  constructor() {
    this.resizeObservable = fromEvent(window, 'resize')
    this.resizeObservable.subscribe(() => this.widthCheck())
  }

  private widthCheck() {
    this.hamburgerMenu.next(
      window.innerWidth <= 950 && 700 <= window.innerWidth
    )
    this.isMobile.next(window.innerWidth <= 700)
  }
}
