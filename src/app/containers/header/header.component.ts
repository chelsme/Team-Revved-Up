import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goTo(location: string): void {
    const element = document.getElementById(location)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
