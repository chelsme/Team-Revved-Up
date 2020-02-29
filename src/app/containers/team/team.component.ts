import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  isMobile: boolean
  mobileSubscription: Subscription

  team = [
    {
      img: 'jason',
      title: 'Jason Jones',
      subtitle: 'Co-Owner/Service Tech',
      blurb:
        'With 23 years in the cleaning industry, Jason has worked with clients both commercial and residential. Many of his jobs are repeat clients who ask for him directly. His personal motto is “If you have it in your home, there’s a great chance that I’ve cleaned it.”',
    },
    {
      img: 'chance',
      title: 'Chance Spence',
      subtitle: 'Co-Owner/Service Tech',
      blurb: 'More information about Chance coming soon...',
    },
    {
      img: 'tyler',
      title: 'Tyler Lambert',
      subtitle: 'Co-Owner/Service Tech',
      blurb: 'More information about Tyler coming soon...',
    },
  ]

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
