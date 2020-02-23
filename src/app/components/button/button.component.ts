import { Component, OnInit, Input, OnChanges } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string
  @Input() isActive: boolean = true

  constructor() {}

  ngOnInit(): void {}
}
