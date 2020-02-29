import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string

  isMobile: boolean
  mobileSubscription: Subscription

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
  }
}
