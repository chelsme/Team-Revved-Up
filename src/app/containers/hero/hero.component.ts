import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  isMobile: boolean
  isMediumWidth: boolean
  mobileSubscription: Subscription
  mediumWidthSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
    this.mediumWidthSubscription = this.appService.mediumWidth.subscribe(
      mediumWidth => (this.isMediumWidth = mediumWidth)
    )
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
    this.mediumWidthSubscription.unsubscribe()
  }

  goTo(location: string): void {
    const element = document.getElementById(location)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
