import { Component } from '@angular/core'

@Component({
  selector: 'ui-layout',
  template: [
    '<ui-header></ui-header>',
    '<div class="d-flex">',
    '<ng-content></ng-content>',
    '</div>'
  ].join(' '),
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor() {}
}
