import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  isMobile: boolean
  mobileSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  ngOnChanges() {
    console.log('MOBILE: ', this.isMobile)
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
  }
}
