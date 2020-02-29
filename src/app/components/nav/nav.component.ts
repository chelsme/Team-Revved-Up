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
  hamburgerMenuSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.hamburgerMenuSubscription = this.appService.hamburgerMenu.subscribe(
      hamburgerMenu => (this.hamburgerMenu = hamburgerMenu)
    )
  }

  goTo(location: string): void {
    this.appService.hamburgerOpen.next(false)
    const element = document.getElementById(location)
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 20)
  }
}
