import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      rating: 5,
      name: 'Cathy Johnson',
      comment: 'Carpet looks amazing! The team was on time, professional, explained the process and friendly. I look forward to working with them again for other services offered.'
    },
    {
      rating: 5,
      name: 'Melissa W',
      comment: 'I highly recommend Jason and the crew at Team Revved Up! These guys were professional and courteous. My dog got into some human food and it tore his stomach up. Unfortunately, he got really sick in my bedroom. I had tried to treat it myself, but it was just too much for me to handle. I called Jason and he responded immediately! They came in, we discussed a plan and they put it into action. They pulled the carpet back, pulled out the pad, dried the plywood and left a fan so that it would all dry up. They also cleaned the other part of the carpet. Then they came back a few days later, treated the plywood, installed new padding and cleaned the carpet again. Wow! My bedroom carpet now looks AMAZING and smells wonderful. These guys do it right and price fairly with no up charge or hidden fees. I am very satisfied and will be using them again. Thanks Jason!!'
    },
    {
      rating: 5,
      name: 'Dawn Fuge',
      comment: 'These guys did a fantastic job. We had high traffic and pet stains and now our carpets look great. The team came in and from start to finish completed the job for 4 rooms in 1 hour. Very friendly. Highly recommend this team.'
    },
    {
      rating: 5,
      name: 'Brianne Morse',
      comment: 'Highly recommend Team Revved Up. We wanted all the carpets cleaned, padding in one room replaced (pet damage), and a broken tile repaired. Getting an estimate and scheduling an appointment was hassle free! These guys were professional and courteous. No hidden cost/fees. No upsales. Everything looks AMAZING. The room with the pet damage is perfect again. Heavy traffic areas match the rest of the carpet. Spills from the kids are gone. The carpet all over the is clean and fluffy! Will definitely use Team Revved Up when we get the tiles cleaned.'
    }
  ]

  selectedTestimonial = 0
  displayedTestimonial = this.testimonials[0]
  isMobile: boolean
  mobileSubscription: Subscription

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.mobileSubscription = this.appService.isMobile.subscribe(
      isMobile => (this.isMobile = isMobile)
    )
  }

  changeTestimonial(direction) {
    if (direction === 'next') {
      if (this.selectedTestimonial === this.testimonials.length - 1) {
        this.selectedTestimonial = 0
      } else {
        this.selectedTestimonial += 1
      }
    } else {
      if (this.selectedTestimonial === 0) {
        this.selectedTestimonial = this.testimonials.length - 1
      } else {
        this.selectedTestimonial -= 1
      }
    }

    this.displayedTestimonial = this.testimonials[this.selectedTestimonial]
  }

}
