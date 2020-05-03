import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  mediumWidth: boolean
  isMobile: boolean
  mediumWidthSubscription: Subscription
  mobileSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mediumWidthSubscription = this.appService.mediumWidth.subscribe(
      mediumWidth => (this.mediumWidth = mediumWidth)
    )
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  ngOnDestroy() {
    this.mediumWidthSubscription.unsubscribe()
    this.mobileSubscription.unsubscribe()
  }

  goTo(location: string): void {
    this.appService.hamburgerOpen.next(false)
    const element = document.getElementById(location)
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 20)
  }
}
