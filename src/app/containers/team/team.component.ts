import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
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
      blurb:
        'With 23 years in the cleaning industry, Jason has worked with clients both commercial and residential. Many of his jobs are repeat clients who ask for him directly. His personal motto is “If you have it in your home, there’s a great chance that I’ve cleaned it.”',
    },
    {
      img: 'jason',
      title: 'Tyler Lambert',
      subtitle: 'Co-Owner/Service Tech',
      blurb:
        'With 23 years in the cleaning industry, Jason has worked with clients both commercial and residential. Many of his jobs are repeat clients who ask for him directly. His personal motto is “If you have it in your home, there’s a great chance that I’ve cleaned it.”',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
