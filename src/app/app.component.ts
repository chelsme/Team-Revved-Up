import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile: boolean
  hamburgerOpen: boolean
  mobileSubscription: Subscription
  hamburgerOpenSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
    this.hamburgerOpenSubscription = this.appService.hamburgerOpen.subscribe(
      hamburgerOpen => (this.hamburgerOpen = hamburgerOpen)
    )
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
    this.hamburgerOpenSubscription.unsubscribe()
  }
}
