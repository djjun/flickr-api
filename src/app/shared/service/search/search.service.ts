import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  @Output() change: EventEmitter<string> = new EventEmitter()

  searchFn(str) {
    this.change.emit(str)
  }
}
