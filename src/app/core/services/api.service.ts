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
    nojsoncallback: 1,
    extras: 'url_z, owner_name, date_taken, tags'
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
          tags: tags
        })
      })
      .pipe(
        map(res => res['photos']),
        map(res => {
          res.photo = res.photo.filter(photo => !!photo.url_z)
          return res
        })
      )
  }
}
