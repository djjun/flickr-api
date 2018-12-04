import { Component, Output, EventEmitter, Input } from '@angular/core'
import { SearchService } from '../../service/search/search.service'

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputForm: string = ''

  @Input() receiveTag

  constructor(private search: SearchService) {}

  onSubmit() {
    if (this.inputForm.length > 0) this.search.searchFn(this.inputForm)
  }
}
