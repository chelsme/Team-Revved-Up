import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
}
