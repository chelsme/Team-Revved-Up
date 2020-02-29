import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
}
