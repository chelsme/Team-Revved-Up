import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  hamburgerOpen: boolean = false
  hamburgerOpenSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.hamburgerOpenSubscription = this.appService.hamburgerOpen.subscribe(
      hamburgerOpen => (this.hamburgerOpen = hamburgerOpen)
    )
  }

  ngOnDestroy() {
    this.hamburgerOpenSubscription.unsubscribe()
  }

  toggleHamburgerMenu() {
    this.appService.hamburgerOpen.next(!this.hamburgerOpen)
  }
}
