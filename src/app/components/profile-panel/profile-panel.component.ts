import { Component, OnInit, Input } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit {
  @Input() img
  @Input() title
  @Input() subtitle
  @Input() blurb

  isMobile: boolean
  mobileSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.img = `assets/${this.img}.png`

    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
  }
}
