import { Component, OnInit } from '@angular/core'
import { APIService } from 'src/app/core/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any

  constructor(private api: APIService) {}

  ngOnInit() {
    this.api.getSearchPhotos('teste').subscribe(data => (this.data = data))
  }
}
