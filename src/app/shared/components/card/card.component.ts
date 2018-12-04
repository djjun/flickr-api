import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() photo: Object

  @Output() tagClick = new EventEmitter()

  constructor() {}

  ngOnInit() {
    this.photo['tags'] = this.photo['tags'].split(' ')
  }

  onClickTag(tag) {
    this.tagClick.emit(tag)
  }
}
