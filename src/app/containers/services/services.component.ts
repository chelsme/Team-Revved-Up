import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  isMobile: boolean
  mobileSubscription: Subscription

  services = [
    {
      img: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      blurb:
        'Most homes only need a little freshening up. We use the hot water/extraction method combined with our biodegradable all natural cleaning solutions to achieve jaw-dropping results that will last.',
    },
    {
      img: 'grout-tile',
      title: 'Tile and Grout Cleaning',
      blurb:
        "Haven't seen the original color of your grout in a while? We’re here to help! Be sure to ask us how to keep your tile and grout in great shape once we get it looking like new again.",
    },
    {
      img: 'carpet-repair',
      title: 'Carpet Repair',
      blurb:
        "Unsightly wrinkles, rips and tears? TRU has the repair! Not only does it make for an eyesore, but it can be a tripping hazard. Let's get out there and come up with a plan to correct it today!",
    },
    {
      img: 'duct-cleaning',
      title: 'Air Duct Cleaning',
      blurb:
        'Do you fill your vacuum cannister in every room that you vacuum? Too much dust on your hard surfaces only 2 days after cleaning? Do your or a family member suffer from allergies or asthma? You should have your air ducts cleaned every 3-5 years to keep the air that you breathe healthier.',
    },
    {
      img: 'floor-resurfacing',
      title: 'Wood Floor Resurfacing',
      blurb:
        'Hardwoods a little worse for the wear? We have the tools and expertise to make them like new without removing the stain or color.',
    },
    {
      img: 'floor-restoration',
      title: 'Wood Floor Restoration',
      blurb:
        'Deep gouges in your hardwood? Want a different feel or color without the cost of replacing? Hardwood floor restoration may be the ticket. If we can make a 120 year old floor look like it was installed last week, I know we can make yours stand out.',
    },
    {
      img: 'image-coming-soon',
      title: 'Pet Treatment',
      blurb:
        'We love our furry friends and they love our soft surfaces. TRU has the products and the know how to get them looking and smelling fresh once more.',
    },
    {
      img: 'image-coming-soon',
      title: 'Upholstery and Drapes',
      blurb:
        "If your favorite seat on the sofa doesn't look like the rest of the sofa any more or you spilled a little something on that armchair, we’ve got you!",
    },
    {
      img: 'image-coming-soon',
      title: 'Vertical Surfaces',
      blurb:
        'Is your kitchen backsplash coated in hard to clean grease? Shower walls not as shiny as the day you fell in love with that walk-in shower? We have the tools to clean vertical surfaces as well.',
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

  goTo(location: string): void {
    const element = document.getElementById(location)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
