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
  hamburgerMenuSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.hamburgerMenuSubscription = this.appService.hamburgerMenu.subscribe(
      hamburgerMenu => (this.hamburgerMenu = hamburgerMenu)
    )
  }

  ngOnDestroy() {
    this.hamburgerMenuSubscription.unsubscribe()
  }

  goTo(location: string): void {
    const element = document.getElementById(location)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
