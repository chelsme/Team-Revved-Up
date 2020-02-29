import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  hamburgerMenu: boolean
  isMobile: boolean
  hamburgerMenuSubscription: Subscription
  mobileSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.hamburgerMenuSubscription = this.appService.hamburgerMenu.subscribe(
      hamburgerMenu => (this.hamburgerMenu = hamburgerMenu)
    )
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  ngOnDestroy() {
    this.hamburgerMenuSubscription.unsubscribe()
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
