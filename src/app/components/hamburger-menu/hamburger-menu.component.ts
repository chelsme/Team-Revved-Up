import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  hamburgerOpen: boolean = false

  constructor() {}

  ngOnInit(): void {}

  toggleHamburgerMenu() {
    this.hamburgerOpen = !this.hamburgerOpen
  }
}
