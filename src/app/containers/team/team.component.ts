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
      subtitle: 'CEO/Service Technician',
      blurb:
        'After 23 years in the cleaning industry, there are not many things that Jason has not had a hand in cleaning. In the beginning of his career, he focused on commercial carpeting, and is a deft hand at hard surface and air duct cleaning. Having worked his way up to General Manager of a major carpet cleaner in Houston, he feels that it has been a long time coming that he finally started his own business, and ended the cycle of inefficiency that has plagued him at other companies.',
    },
    {
      img: 'chance',
      title: 'Chance Spence',
      subtitle: 'CFO/Service Technician',
      blurb:
        'With 10+ years of experience cleaning carpet and hard surfaces, Chance brings a business management background to the team. He wants anyone who looks at this website to know that the images that you see here are our actual work, not some stock photos that were pulled from the internet. This team takes pride in everything that they do.',
    },
    {
      img: 'tyler',
      title: 'Tyler Lambert',
      subtitle: 'COO/Service Technician',
      blurb:
        "Being trained by one of the industry’s best has made Tyler a well rounded technician at a young age. Tyler's can-do attitude and problem solving techniques have launched him to the very top of every division that he has entered.",
    },
  ]

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      (isMobile) => (this.isMobile = isMobile)
    )
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe()
  }
}
