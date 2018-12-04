import { Component, OnInit } from '@angular/core'
import { APIService } from 'src/app/core/services/api.service'
import { SearchService } from 'src/app/shared/service/search/search.service'

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'container-fluid' }
})
export class HomeComponent implements OnInit {
  data: any = []
  currentPage: number = 1
  searchStr: string = ''
  hasLoading: boolean = false
  noPhotos: boolean = false

  scrollCallback

  constructor(private api: APIService, private search: SearchService) {
    this.scrollCallback = this.searchPhotos.bind(this)
  }

  ngOnInit() {
    this.search.change.subscribe(str => {
      this.noPhotos = false
      this.data = []
      this.searchStr = str
      this.searchPhotos()
    })
  }

  searchPhotos() {
    this.hasLoading = true
    this.api
      .getSearchPhotos(this.searchStr, this.currentPage)
      .subscribe(this.processData)
  }

  processData = newData => {
    if (newData.pages > 0) {
      let oldData = this.data
      this.currentPage++
      this.data = oldData.concat(newData.photo)
    } else {
      this.noPhotos = true
    }

    this.hasLoading = false
  }

  onScroll() {
    this.searchPhotos()
  }

  onTagClick(e) {
    console.log(e)
  }
}
