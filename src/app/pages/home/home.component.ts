import { Component, OnInit } from '@angular/core'
import { APIService } from 'src/app/core/services/api.service'

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'container-fluid' }
})
export class HomeComponent implements OnInit {
  data: any = []
  currentPage: number = 1
  hasLoading: boolean = false

  scrollCallback

  constructor(private api: APIService) {
    this.scrollCallback = this.searchPhotos.bind(this)
  }

  ngOnInit() {
    this.searchPhotos()
  }

  searchPhotos() {
    this.hasLoading = true
    this.api
      .getSearchPhotos('dragonball', this.currentPage)
      .subscribe(this.processData)
  }

  processData = newData => {
    let oldData = this.data
    this.currentPage++
    this.data = oldData.concat(newData.photo)

    this.hasLoading = false
  }

  onScroll() {
    this.searchPhotos()
  }

  onTagClick(e) {
    console.log(e)
  }
}
