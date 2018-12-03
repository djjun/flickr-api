import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_URL = environment.flickr.URL
  objParamsDefault = {
    format: 'json',
    api_key: environment.flickr.KEY,
    per_page: 20,
    page: 1
  }

  constructor(private http: HttpClient) {}

  /**
   * Convert Object to HttpParams
   * @param {Object} data
   * @returns {HttpParams}
   */
  setBodyToParams(data: Object): HttpParams {
    return Object.getOwnPropertyNames(data).reduce(
      (p, key) => p.set(key, data[key]),
      new HttpParams()
    )
  }

  getFeed() {
    return this.http.get(`${this.API_URL}/`).subscribe(
      () => {
        console.log('success')
      },
      error => {
        console.log('error')
      }
    )
  }

  /**
   * Search photos by tag
   * @param {string} tags
   * @param {number} page
   * @returns {Object}
   */
  getSearchPhotos(tags: string, page: number = 1) {
    return this.http
      .get(`${this.API_URL}/`, {
        params: this.setBodyToParams({
          ...this.objParamsDefault,
          method: 'flickr.photos.search',
          page: page,
          tags: tags,
          nojsoncallback: 1
        })
      })
      .pipe(map(res => res['photos']))
  }
}
