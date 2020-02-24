import { Component, OnInit, Input } from '@angular/core'

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

  constructor() {}

  ngOnInit(): void {
    this.img = `assets/${this.img}.png`
  }
}
